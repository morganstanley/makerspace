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
            language
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
    const language = page.fields.language;
    const isHome = filePath.includes('home.mdx');
    
    let pagePath = page.fields.slug;
    
    // For home pages, use appropriate language paths
    if (isHome) {
      pagePath = language === 'en-US' ? '/' : `/${language}/`;
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
    const filePath = node.internal.contentFilePath;
    
    // Extract language from file path
    let language = 'en-US';
    if (filePath.includes('/en-US/')) {
      language = 'en-US';
    } else if (filePath.includes('/fr-CA/')) {
      language = 'fr-CA';
    } else if (filePath.includes('/pt-BR/')) {
      language = 'pt-BR';
    }
    
    createNodeField({
      name: `language`,
      node,
      value: language,
    });
    
    // Create slug - createFilePath includes language folder, so we need to normalize
    const rawSlug = createFilePath({ node, getNode });
    let slug = rawSlug;
    
    // Normalize slug based on language
    // createFilePath gives us paths like: /en-US/continue/, /fr-CA/continue/, etc.
    // We want: /continue/ for English, /fr-CA/continue/ for French, /pt-BR/continue/ for Portuguese
    if (rawSlug.startsWith('/en-US/')) {
      slug = rawSlug.substring(7); // Remove '/en-US/'
    } else if (rawSlug.startsWith('/fr-CA/')) {
      slug = rawSlug; // Keep as is for French
    } else if (rawSlug.startsWith('/pt-BR/')) {
      slug = rawSlug; // Keep as is for Portuguese
    }
    
    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};

