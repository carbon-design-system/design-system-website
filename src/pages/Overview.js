import React from 'react';
import Letter from '../internal/Letters';
import { Link } from 'react-router';

class Overview extends React.Component {

  componentDidMount() {
    document.title = 'Carbon Design System';
  }

  render() {
    const icon1 = require('../content/overview/images/icon-1.svg');
    const icon2 = require('../content/overview/images/icon-2.svg');
    const icon3 = require('../content/overview/images/icon-3.svg');

    return (
      <main tabIndex="0" id="maincontent" className="overview-page">
        <div className="overview-page__top-banner">
          <div className="overview-page__title" tabIndex="0">
            <h1 className="overview-page__title--aria">Carbon Design System</h1>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">
                <Letter letter="C" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="D" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="S" />
              </span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--shape">
                <Letter letter="A" active />
              </span>
              <span className="overview-page__title--shape">
                <Letter letter="E" active />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="Y" />
              </span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">
                <Letter letter="R" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="S" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="S" />
              </span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">
                <Letter letter="B" />
              </span>
              <span className="overview-page__title--shape">
                <Letter letter="I" active />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="T" />
              </span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--shape">
                <Letter letter="O" active />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="G" />
              </span>
              <span className="overview-page__title--shape">
                <Letter letter="E" active purple />
              </span>
            </div>
            <div className="overview-page__title--column">
              <span className="overview-page__title--letter">
                <Letter letter="N" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="N" />
              </span>
              <span className="overview-page__title--letter">
                <Letter letter="M" />
              </span>
            </div>
          </div>
        </div>
        <div className="overview-page__content">
        <Letter />
          <div className="overview-page__main-intro">
            <div className="overview-page__main-intro--icon">
              <img alt="Hexagon icon" src={icon1} />
            </div>
            <div className="overview-page__main-intro--content">
              <p className="overview-page__main-intro--text">Carbon, in nature, allows for complex structures to be made from simpler compounds. The Carbon Design System is a series of individual styles and components, that when combined make beautiful, intuitive designs. These designs are systemic and logical, as they all follow the same universal principles.</p>
              <Link className="overview-page__main-intro--link bx--btn bx--btn--secondary" to="/components/accordion/code">
                Explore the system
              </Link>
            </div>
          </div>
          <div className="overview-page__tiles">
            <div className="overview-page__tile">
              <div className="overview-page__tile--icon">
                <img alt="Tile icon 1" src={icon2} />
              </div>
              <div className="overview-page__tile--content">
                <h2 className="overview-page__tile--heading">
                  Carbon design kit
                </h2>
                <p className="overview-page__tile--text">
                  The design kit consists of core visual styles and patterns. It has everything a designer needs to start building experiences.
                </p>
                <a href="https://github.com/carbon-design-system/carbon-design-kit" className="overview-page__tile--link">Get the Sketch kit</a>
              </div>
            </div>
            <div className="overview-page__tile">
              <div className="overview-page__tile--icon">
                <img alt="Tile icon 2" src={icon3} />
              </div>
              <div className="overview-page__tile--content">
                <h2 className="overview-page__tile--heading">
                  Carbon component library
                </h2>
                <p className="overview-page__tile--text">
                  The component library gives developers a collection of re-usable HTML and Sass partials for building their products.
                </p>
                <a href="https://github.com/carbon-design-system/carbon-components" className="overview-page__tile--link">Component GitHub repo</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Overview;
