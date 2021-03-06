import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import FilterIcon from './FilterIcon';
import { changeEventsFilteringType } from '../../../store/events/actions';
import SortingPanelFields from '../../../constants/components-fields/sorting-panel-fields';

import './filters-panel.css';

function FiltersPanel({
  filters,
  changeEventsFilteringType,
}) {
  const handleClick = (filter) => {
    changeEventsFilteringType(filter);
  };

  const currentPage = String(useRouteMatch('/:page')?.params.page);

  const makeClass = () => {
    if (currentPage === 'undefined' || currentPage === 'profile') {
      return 'sorting-panel__filters sorting-panel_visible';
    }

    return 'sorting-panel__filters';
  };

  return (
    <div className={makeClass()}>
      {SortingPanelFields.FILTERS.map((filter) => (
        <div
          role="button"
          className="filters__filter"
          title={filter.value}
          onClick={() => handleClick(filter.value)}
          key={filter.value}
          tabIndex={0}
        >
          <FilterIcon
            icon={filter.value}
            isActive={filters.includes(filter.value)}
          />
        </div>
      ))}
    </div>
  );
}

FiltersPanel.propTypes = {
  filters: PropTypes.array.isRequired,
  changeEventsFilteringType: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    filters: state.events.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeEventsFilteringType: (filters) => dispatch(
      changeEventsFilteringType(filters),
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FiltersPanel);
