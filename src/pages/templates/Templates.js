import React from 'react';
import Catalog from './Catalog';
import CategoryPages from './CategoryPages';
import ConfigurationPages from './ConfigurationPages';
import InstanceDashboards from './InstanceDashboards';

class Templates extends React.Component {

  render() {
    const paramsName = this.props.params.name;
    let page;
    if (paramsName === 'catalog') page = <Catalog />;
    else if (paramsName === 'category-pages') page = <CategoryPages />;
    else if (paramsName === 'configuration-pages') page = <ConfigurationPages />;
    else if (paramsName === 'instance-dashboards') page = <InstanceDashboards />;
    return page;
  }
}

export default Templates;
