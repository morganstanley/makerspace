import React from 'react';
import { Link } from 'gatsby';

import { getCanonicalExercisePath, getLocaleSwitchPath } from '../i18n';
import { useLocale } from '../i18n/LocaleContext';

function getLevels(nodes) {
  const potentialValues = [];
  nodes.forEach((node) => {
    if (!potentialValues.includes(node.frontmatter.level)) {
      potentialValues.push(node.frontmatter.level);
    }
  });
  return potentialValues;
}

const ExerciseListItems = ({ location, nodes, toc, locale }) => {
  const currentPath = getCanonicalExercisePath(location.pathname);
  return nodes.map((node, i) => {
    const isCurrentPage = currentPath.includes(node.fields.slug);
    const title = node.frontmatter.title;
    return (
      <li className={isCurrentPage ? 'current' : ''} key={`exercise-${i}`}>
        <Link to={getLocaleSwitchPath(node.fields.slug, locale)}>
          {node.frontmatter.exercise} ) {title}
        </Link>
        {isCurrentPage && toc && (
          <nav className="nav exercise-content-nav">
            <ul>
              {toc.map((item, j) => (
                <li key={`toc-${j}`}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </li>
    );
  });
};

const ExerciseNav = ({ location, nodes, toc }) => {
  const levels = getLevels(nodes);
  const { strings, locale } = useLocale();
  const { exercise: exerciseStrings } = strings;

  return (
    <nav className="nav exercise-nav">
      {levels.map((level, i) => {
        const currentLevel = nodes.filter(
          (node) =>
            node.frontmatter.level === level && !!node.frontmatter.exercise
        );
        return (
          <div key={`level-${i}`}>
            {level !== null && <h3>{exerciseStrings.level} {level}</h3>}
            <ul>
              <ExerciseListItems
                location={location}
                nodes={currentLevel}
                toc={toc}
                locale={locale}
              />
            </ul>
          </div>
        );
      })}
    </nav>
  );
};

export default ExerciseNav;
