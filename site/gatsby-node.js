const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      allMdx {
        nodes {
          id
          tableOfContents
          frontmatter {
            template
            title
            tags
            level
            exercise
            category
            description
          }
          internal {
            contentFilePath
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  // Create  pages.
  const pages = result.data.allMdx.nodes;
  const exerciseTemplate = path.resolve(`./src/templates/exercise.jsx`);
  const indexTemplate = path.resolve(`./src/templates/index.jsx`);
  const pageTemplate = path.resolve(`./src/templates/page.jsx`);
  const homeTemplate = path.resolve(`./src/templates/home.jsx`);

  function getTemplate(page) {
    const filePath = page.internal.contentFilePath;
    const isExerciseIndex = filePath.includes('index') && filePath.includes('exercise');
    const isHome = filePath.includes('home.mdx');
    
    if (page.frontmatter.exercise) {
      return exerciseTemplate;
    } else if (isExerciseIndex) {
      return indexTemplate;
    } else if (isHome) {
      return homeTemplate;
    }
    return pageTemplate;
  }

  pages.forEach((page) => {
    const category = page.frontmatter.category;
    const filePath = page.internal.contentFilePath;
    const isHome = filePath.includes('home.mdx');
    
    let pagePath = page.fields.slug;
    // For home pages, use appropriate language paths
    if (isHome) {
      if (filePath.includes('/fr-CA/')) {
        pagePath = '/fr-CA/';
      } else if (filePath.includes('/pt-BR/')) {
        pagePath = '/pt-BR/';
      } else {
        pagePath = '/';
      }
    }
    
    createPage({
      path: pagePath,
      component: `${getTemplate(page)}?__contentFilePath=${filePath}`,
      context: {
        id: page.id,
        category: category,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
