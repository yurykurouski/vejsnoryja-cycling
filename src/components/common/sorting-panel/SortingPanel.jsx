import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../input/Input';
import { changeEventsSortingType } from '../../../store/events/actions';
import SortingPanelFields from '../../../constants/components-fields/sorting-panel-fields';

import './sorting-panel.css';

function SortingPanel({
  className,
  sorting,
  changeEventsSortingType,
}) {
  const [inputValue, setInputValue] = useState(sorting);

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
    </div>
  );
}

SortingPanel.propTypes = {
  sorting: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  changeEventsSortingType: PropTypes.func.isRequired,
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);
