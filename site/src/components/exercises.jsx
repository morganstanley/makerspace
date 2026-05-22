import React from 'react';
import { Link } from 'gatsby';

import { useLocale } from '../i18n/LocaleContext';

const ExerciseList = ({ nodes }) => {
  const { strings } = useLocale();
  const { exercise: exerciseStrings } = strings;

  return nodes.map((node) => {
    return (
      <article key={node.fields.slug} className="content">
        <header>
          <h3>
            <Link to={node.fields.slug}>
              {exerciseStrings.exercise} {node.frontmatter.exercise} |{' '}
              {node.frontmatter.title}
            </Link>
          </h3>
          <p>{node.frontmatter.description}</p>
        </header>
      </article>
    );
  });
};

export default ExerciseList;
