import React from 'react';
import { Link, graphql } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import PageHead from '../components/head';
import Translations from '../components/translations';

export default function HomeTemplate({ data, location, children }) {
  const { mdx } = data;
  const { title, subtitle } = mdx.frontmatter;

  return (
    <Layout location={location}>
      <div className="home-main">
        <Hero title={title} subtitle={subtitle} />
        <article className="hero hero-learn">
          <img
            src="images/student-computer.jpg"
            className="background-image"
            alt="Student with CPX Board"
          />
          <div className="pane">
            <header className="content">
              <h2>
                <span className="cpx-title">
                  <Link to={`/exercises`}>Learn to code</Link>
                </span>
              </h2>
            </header>
            <section className="content">
              <span className="cpx-title">
                An interactive introduction to coding. Learn the basics through
                simple exercises designed to inspire.
              </span>
            </section>
          </div>
        </article>
        <article className="hero hero-teach">
          <div className="pane">
            <img
              src="images/chelci-beth.jpg"
              className="background-image"
              alt="Presenters"
            />
            <div className="pane">
              <header className="content">
                <h2>
                  <span className="cpx-title">
                    <Link to={`/teach`}>Teach</Link>
                  </span>
                </h2>
              </header>
              <section className="content">
                <span className="cpx-title">
                  Learn how to encourage and inspire young coders as a volunteer
                  in a CPX Training Workshop.
                </span>
              </section>
            </div>
          </div>
        </article>
        <article className="hero hero-make-a-makerspace">
          <img
            src="images/teacher-student.jpg"
            className="background-image"
            alt="Student and Teacher"
          />
          <div className="pane">
            <header className="content">
              <h2>
                <span className="cpx-title">
                  <Link to={`/makerspace`}>Make a Makerspace</Link>
                </span>
              </h2>
            </header>
            <section className="content">
              <span className="cpx-title">
                Learn what it takes to create a Makerspace for your community.
              </span>
            </section>
          </div>
        </article>
        <Translations />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        subtitle
        description
      }
    }
  }
`;

export const Head = ({ data }) => (
  <PageHead title={data.mdx.frontmatter.title}>
    <meta
      name="description"
      content={data.mdx.frontmatter.description}
    />
  </PageHead>
);
