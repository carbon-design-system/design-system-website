import React from 'react';
import { Link } from 'react-router';
import ReactGA from 'react-ga';
import { Button, ClickableTile } from 'carbon-components-react';

class Overview extends React.Component {
  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  handleClick = (cat) => {
    ReactGA.event({
      category: cat,
      action: 'Clicked link'
    });
  }

  render() {
    return (
      <main id="maincontent" role="main" aria-labelledby="page-title" className="overview-page" tabIndex="-1">
        <section className="overview-page__banner">
          <h1 className="banner__logo"><span className="banner__logo--bold">Carbon</span> Design System</h1>
          <Button kind="secondary" className="banner__cta-btn">Explore the system</Button>
        </section>
        <section className="overview-page__section">
          <ul className="overview-page__list">
            <li className="overview-page__list-item">
              <div className="list-item__icon"></div>
              <div className="list-item__info">
                <Link to="/getting-started">Getting Started</Link>
                <p>Onboarding for designers and developers who are using Carbon for the first time.</p>
              </div>
            </li>
            <li className="overview-page__list-item">
              <div className="list-item__icon"></div>
              <div className="list-item__info">
                <Link to="/style">Style</Link>
                <p>Guidance on usage and application for basic design elements.</p>
              </div>
            </li>
            <li className="overview-page__list-item">
              <div className="list-item__icon"></div>
              <div className="list-item__info">
                <Link to="/components">Components</Link>
                <p>A library of all Carbon components, compromised of code, usage and style guidelines.</p>
              </div>
            </li>
            <li className="overview-page__list-item">
              <div className="list-item__icon"></div>
              <div className="list-item__info">
                <Link to="/resources">Resources</Link>
                <p>A helpful list of tools, links and downloads that will improve a Carbon user's workflow.</p>
              </div>
            </li>
          </ul>
        </section>
        <section className="overview-page__section overview-page__section--gray">
          <ul className="overview-page__list">
            <li>
              <ClickableTile>
                <div className="tile__icon"></div>
                <div className="tile__info">
                  <p>Carbon Design Kit</p>
                  <p>A Sketch file containing core visual styles, components, and patterns a designers needs to use Carbon as a framework for building product experiences.</p>
                </div>
              </ClickableTile>
            </li>
            <li>
              <ClickableTile>
                <div className="tile__icon"></div>
                <div className="tile__info">
                  <p>Carbon Components</p>
                  <p>Components are written in two languages, Vanilla.js and React. Storybook, a UI component development environment, houses the React components.</p>
                </div>
              </ClickableTile>
            </li>
            <li>
              <ClickableTile>
                <div className="tile__icon"></div>
                <div className="tile__info">
                  <p>Carbon CodePen</p>
                  <p>CodePen, a social development playground for front-end designers and developers, houses demos of Carbon Components.</p>
                </div>
              </ClickableTile>
            </li>
            <li>
              <ClickableTile>
                <div className="tile__icon"></div>
                <div className="tile__info">
                  <p>Theming Sandbox</p>
                  <p>This sandbox allows you to build a custom theme by changing a color variable's hex value and then exporing the theme sheet SCSS file.</p>
                </div>
              </ClickableTile>
            </li>
          </ul>
        </section>
        <section className="overview-page__section overview-page__section--contribute">
          <h2>Wondering how to contribute to Carbon?</h2>
          <p>We welcome all feedback, designs, or ideas in order to produce the best possible experience for our users.
            If you're interested in contributing, check out our <Link to="/guidelines">guidelines</Link> to get started.</p>
        </section>
      </main>
    );
  }
}

export default Overview;
