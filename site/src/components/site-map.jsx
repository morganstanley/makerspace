import React from 'react';
import { Link } from 'gatsby';

import { useLocale } from '../i18n/LocaleContext';

function getCategories(nodes) {
  const potentialValues = [];
  nodes.forEach((node) => {
    const cat = node.frontmatter.category;
    if (typeof cat !== 'undefined' && !potentialValues.includes(cat)) {
      potentialValues.push(cat);
    }
  });
  return potentialValues;
}

function getLevels(nodes) {
  const potentialValues = [];
  nodes.forEach((node) => {
    const level = node.frontmatter.level;
    if (typeof level !== 'undefined' && !potentialValues.includes(level)) {
      potentialValues.push(level);
    }
  });
  return potentialValues;
}

const PageListItems = ({ nodes }) => {
  return nodes.map((node, i) => {
    const title = node.frontmatter.title;
    const exercise = node.frontmatter.exercise;
    const toc = node.tableOfContents.items;
    return (
      <li key={`exercise-${i}`}>
        <Link to={node.fields.slug}>
          {exercise ? `${exercise} ) ` : ''}
          {title}
        </Link>
        <nav className="nav exercise-content-nav">
          <ul>
            {toc &&
              toc.map((item, j) => (
                <li key={`toc-${j}`}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </li>
    );
  });
};

const PagesByLevel = ({ levels, location, nodes }) => {
  const { strings } = useLocale();
  const { exercise: exerciseStrings } = strings;

  return (
  <nav className="nav exercise-nav">
    {levels.map((level, i) => {
      const currentLevelNodes = nodes.filter(
        (node) => node.frontmatter.level === level
      );
      return (
        <div key={`level-${i}`}>
          {level !== null && <h3>{exerciseStrings.level} {level}</h3>}
          <ul>
            <PageListItems location={location} nodes={currentLevelNodes} />
          </ul>
        </div>
      );
    })}
  </nav>
  );
};

const PagesByCategory = ({ categories, location, nodes }) => {
  return categories.map((category, i) => {
    const currentCategoryNodes = nodes.filter(
      (node) => node.frontmatter.category === category
    );
    const levels = getLevels(currentCategoryNodes);
    return (
      <>
        {category !== null && <h2>{category}</h2>}
        <PagesByLevel
          levels={levels}
          location={location}
          nodes={currentCategoryNodes}
        />
      </>
    );
  });
};

const SiteMap = ({ location, nodes }) => {
  const categories = getCategories(nodes);

  return (
    <PagesByCategory
      categories={categories}
      location={location}
      nodes={nodes}
    />
  );
};

export default SiteMap;
