import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import SortingPanelFields from '../../../constants/components-fields/sorting-panel-fields';
import Input from '../input/Input';
import { changeEventsSortingType } from '../../../store/events/actions';

import './sorting-panel.css';

function SortingPanel({
  className,
  sorting,
  changeEventsSortingType,
}) {
  const [value, setValue] = useState(sorting);

  const handleChange = (e) => {
    const sortingType = e.target.value;

    setValue(sortingType);
    changeEventsSortingType(sortingType);
  };

  return (
    <div className={`${ className } sorting-panel-wrap`}>
      <Input
        {...SortingPanelFields.INPUT_TYPE}
        // customLabelClass={className}
        onChange={handleChange}
        value={value}
      />
      filters
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeEventsSortingType: (sortingType) => dispatch(changeEventsSortingType(sortingType)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortingPanel);
