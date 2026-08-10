import React from 'react';

function Hero({ title, subtitle, heroId }) {
  const id = heroId || title.split(' ').join('-').toLowerCase();
  const classnames = `hero hero-${id}`;
  return (
    <article className={classnames}>
      <div className="pane">
        <header className="content">
          <h2>
            <span className="cpx-title">{title}</span>
          </h2>
        </header>
        <section className="content">
          <span className="cpx-title">{subtitle}</span>
        </section>
      </div>
    </article>
  );
}

export default Hero;
