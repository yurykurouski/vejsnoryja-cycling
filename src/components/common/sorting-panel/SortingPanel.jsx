import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from '@material-ui/core';

import Input from '../input/Input';
import SortingPanelFields from '../../../constants/components-fields/sorting-panel-fields';
import { changeEventsFilteringType, changeEventsSortingType } from '../../../store/events/actions';

import './sorting-panel.css';

function SortingPanel({
  className,
  sorting,
  changeEventsSortingType,
  filters,
  changeEventsFilteringType,
}) {
  const [inputValue, setInputValue] = useState(sorting);

  const handleClick = (filter) => {
    changeEventsFilteringType(filter);
  };

  const handleChange = (e) => {
    const sortingType = e.target.value;

    setInputValue(sortingType);
    changeEventsSortingType(sortingType);
  };
  return (
    <div className={`${ className } sorting-panel-wrap`}>

      <Input
        {...SortingPanelFields.INPUT_TYPE}
        customLabelClass="sorting-panel-label"
        onChange={handleChange}
        value={inputValue}
      />

      {filters.length > 0
        && <div className="sorting-panel__active-filters">
          {filters.map((filter) => (
            <div
              className="active-filters__filter"
              key={filter}
              onClick={() => handleClick(filter)}
              role="button"
              tabIndex={0}
            >
              {filter}
              <Icon>cancel</Icon>
            </div>
          ))}
        </div>}

    </div>
  );
}

SortingPanel.propTypes = {
  sorting: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  changeEventsSortingType: PropTypes.func.isRequired,
  changeEventsFilteringType: PropTypes.func.isRequired,
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function mapStateToProps(state) {
  return {
    sorting: state.events.sortingType,
    filters: state.events.filters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeEventsSortingType: (sortingType) => dispatch(changeEventsSortingType(sortingType)),
    changeEventsFilteringType: (filter) => dispatch(changeEventsFilteringType(filter)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);
