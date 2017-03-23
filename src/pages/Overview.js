import React from 'react';
import Letter from '../internal/Letters';
import { Link } from 'react-router';

class Overview extends React.Component {

  render() {
    const icon1 = require('../content/overview/images/icon-1.svg');
    const icon2 = require('../content/overview/images/icon-2.svg');
    const icon3 = require('../content/overview/images/icon-3.svg');

    return (
      <section className="overview-page">
        <div className="overview-page__top-banner">
          <div className="overview-page__title">
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
                <Letter letter="E" active />
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
                <p className="overview-page__tile--heading">
                  Design Kit
                </p>
                <p className="overview-page__tile--text">
                  The design kit consists of core visual styles and patterns. It has everything a designer needs to start building experiences.
                </p>
                <a href="https://github.ibm.com/Bluemix/design-kit" className="overview-page__tile--link">Get the kit</a>
              </div>
            </div>
            <div className="overview-page__tile">
              <div className="overview-page__tile--icon">
                <img alt="Tile icon 2" src={icon3} />
              </div>
              <div className="overview-page__tile--content">
                <p className="overview-page__tile--heading">
                  Component Library
                </p>
                <p className="overview-page__tile--text">
                  The component library gives developers a collection of re-usable HTML and Sass partialst for building their products.
                </p>
                <a href="https://github.ibm.com/Bluemix/bluemix-components" className="overview-page__tile--link">Go to repo</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Overview;
