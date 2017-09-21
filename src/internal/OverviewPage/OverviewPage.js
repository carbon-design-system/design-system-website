import React, { Component } from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types'; // eslint-disable-line
import Page from '../Page';

class OverviewPage extends Component {
  render() {
    const accordionExample = require('./images/Accordion.svg');
    const breadcrumbExample = require('./images/Breadcrumb.svg');
    const buttonExample = require('./images/Button.svg');
    const cardExample = require('./images/Card.svg');
    const checkboxExample = require('./images/Checkbox.svg');
    const codeSnippetExample = require('./images/Code Snippet.svg');
    const contentSwitcherExample = require('./images/Content Switcher.svg');
    const dataTableExample = require('./images/Data Table.svg');
    const datePickerExample = require('./images/Date Picker.svg');
    const detailPageHeaderExample = require('./images/Detail Page Header.svg');
    const dropdownExample = require('./images/Dropdown.svg');
    const fileUploaderExample = require('./images/File Uploader.svg');
    const formExample = require('./images/Form.svg');
    const interiorLeftNavExample = require('./images/Interior Left Nav.svg');
    const linkExample = require('./images/Link.svg');
    const listExample = require('./images/List.svg');
    const loadingExample = require('./images/Loading.svg');
    const modalExample = require('./images/Modal.svg');
    const moduleExample = require('./images/Module.svg');
    const notificationExample = require('./images/Notification.svg');
    const numberInputExample = require('./images/Number Input.svg');
    const overflowMenuExample = require('./images/Overflow Menu.svg');
    const paginationExample = require('./images/Pagination.svg');
    const progressIndicatorExample = require('./images/Progress Indicator.svg');
    const radioButtonExample = require('./images/Radio Button.svg');
    const searchExample = require('./images/Search.svg');
    const selectExample = require('./images/Select.svg');
    const sliderExample = require('./images/Slider.svg');
    const structuredListExample = require('./images/Structured List.svg');
    const tabsExample = require('./images/Tabs.svg');
    const tagExample = require('./images/Tag.svg');
    const textInputExample = require('./images/Text Input.svg');
    const tileExample = require('./images/Tile.svg');
    const toggleExample = require('./images/Toggle - 2.svg');
    const tooltipExample = require('./images/Tooltip.svg');

    const componentData = [
      {
        name: 'Accordion',
        img: require('./images/Accordion.svg'),
        link: '/components/accordion'
      },
      {
        name: 'Breadcrumb',
        img: require('./images/Breadcrumb.svg'),
        link: '/components/breadcrumb'
      },
      {
        name: 'Button',
        img: require('./images/Button.svg'),
        link: '/components/button'
      },
      {
        name: 'Card',
        img: require('./images/Card.svg'),
        link: '/components/card'
      },
      {
        name: 'Checkbox',
        img: require('./images/Checkbox.svg'),
        link: '/components/checkbox'
      },
      {
        name: 'Code Snippet',
        img: require('./images/Code Snippet.svg'),
        link: '/components/code-snippet'
      },
      {
        name: 'Content Switcher',
        img: require('./images/Content Switcher.svg'),
        link: '/components/content-switcher'
      },
      {
        name: 'Data Table',
        img: require('./images/Data Table.svg'),
        link: '/components/data-table'
      },
      {
        name: 'Data Vis',
        img: require('./images/data-vis.svg'),
        link: '/data-vis/overview'
      },
      {
        name: 'Date Picker',
        img: require('./images/Date Picker.svg'),
        link: '/components/date-picker'
      },
      {
        name: 'Detail Page Header',
        img: require('./images/Detail Page Header.svg'),
        link: '/components/detail-page-header'
      },
      {
        name: 'Dropdown',
        img: require('./images/Dropdown.svg'),
        link: '/components/dropdown'
      },
      {
        name: 'File Uploader',
        img: require('./images/File Uploader.svg'),
        link: '/components/file-uploader'
      },
      {
        name: 'Form',
        img: require('./images/Form.svg'),
        link: '/components/form'
      },
      {
        name: 'Interior Left Nav',
        img: require('./images/Interior Left Nav.svg'),
        link: '/components/interior-left-nav'
      },
      {
        name: 'Link',
        img: require('./images/Link.svg'),
        link: '/components/link'
      },
      {
        name: 'List',
        img: require('./images/List.svg'),
        link: '/components/list'
      },
      {
        name: 'Loading',
        img: require('./images/Loading.svg'),
        link: '/components/loading'
      },
      {
        name: 'Modal',
        img: require('./images/Modal.svg'),
        link: '/components/modal'
      },
      {
        name: 'Module',
        img: require('./images/Module.svg'),
        link: '/components/module'
      },
      {
        name: 'Notification',
        img: require('./images/Notification.svg'),
        link: '/components/notification'
      },
      {
        name: 'Number Input',
        img: require('./images/Number Input.svg'),
        link: '/components/number-input'
      },
      {
        name: 'Overflow Menu',
        img: require('./images/Overflow Menu.svg'),
        link: '/components/overflow-menu'
      },
      {
        name: 'Pagination',
        img: require('./images/Pagination.svg'),
        link: '/components/pagination'
      },
      {
        name: 'Progress Indicator',
        img: require('./images/Progress Indicator.svg'),
        link: '/components/progress-indicator'
      },
      {
        name: 'Radio Button',
        img: require('./images/Radio Button.svg'),
        link: '/components/radio-button'
      },
      {
        name: 'Search',
        img: require('./images/Search.svg'),
        link: '/components/search'
      },
      {
        name: 'Select',
        img: require('./images/Select.svg'),
        link: '/components/select'
      },
      {
        name: 'Slider',
        img: require('./images/Slider.svg'),
        link: '/components/slider'
      },
      {
        name: 'Structured List',
        img: require('./images/Structured List.svg'),
        link: '/components/structured-list'
      },
      {
        name: 'Tabs',
        img: require('./images/Tabs.svg'),
        link: '/components/tabs'
      },
      {
        name: 'Tag',
        img: require('./images/Tag.svg'),
        link: '/components/tag'
      },
      {
        name: 'Tile',
        img: require('./images/Tile.svg'),
        link: '/components/tile'
      },
      {
        name: 'Text Input',
        img: require('./images/Text Input.svg'),
        link: '/components/text-input'
      },
      {
        name: 'Toggle',
        img: require('./images/Toggle.svg'),
        link: '/components/toggle'
      },
      {
        name: 'Tooltip',
        img: require('./images/Tooltip.svg'),
        link: '/components/tooltip'
      }
    ];
    let key = 0;
    const componentTemplate = componentData.map(component => {
      key++;
      return (
        <li key={key} className="component-item">
          <div className="flex-item">
            <Link to={component.link}>
              <img src={component.img} />
              <p className="component-name">{component.name}</p>
            </Link>
          </div>
        </li>
      );
    });

    const content = (
      <div className="page">
        <ul className="flex-container">{componentTemplate}</ul>
      </div>
    );
    return <Page label="Component" title="Overview" content={content} />;
  }
}

export default OverviewPage;
