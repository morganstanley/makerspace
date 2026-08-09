import React from 'react';
import { Link } from 'gatsby';

import Hero from '../components/hero';
import Layout from '../components/layout';
import PageHead from '../components/head';
import { getLocaleFromPath, getLocalePath } from '../i18n';

const SiteIndex = ({ location }) => {
  const locale = getLocaleFromPath(location?.pathname);

  return (
    <Layout location={location}>
      <div className="home-main">
        <Hero
          title="Building Community Through Code"
          subtitle="Intro to Programming"
        />
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
                  <Link to={getLocalePath('/exercises', locale)}>Learn to code</Link>
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
                    <Link to={getLocalePath('/teach', locale)}>Teach</Link>
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
                  <Link to={getLocalePath('/makerspace', locale)}>
                    Make a Makerspace
                  </Link>
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
      </div>
    </Layout>
  );
};

export default SiteIndex;

export const Head = ({ data }) => (
  <PageHead title="Home">
    <meta
      name="description"
      content="Introduction to programming with Adafruit's Circuit Playground
                Express"
    />
  </PageHead>
);
