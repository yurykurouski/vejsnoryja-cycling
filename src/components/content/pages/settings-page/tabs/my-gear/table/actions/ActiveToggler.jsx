import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radio from '@material-ui/core/Radio';

import { setActiveGear } from '../../../../../../../../store/gear/actions';

function ActiveToggler({ bike, setActiveGear }) {
  const handleChange = async () => {
    await setActiveGear({ _id: bike._id });
  };

  return (
    <Radio
      checked={bike.active}
      onChange={handleChange}
      value={bike._id}
      name="active"
      style={{ color: '#146bff' }}
    />
  );
}

ActiveToggler.propTypes = {
  bike: PropTypes.object.isRequired,
  setActiveGear: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    setActiveGear: (data) => dispatch(setActiveGear(data)),
  };
}

export default connect(null, mapDispatchToProps)(ActiveToggler);
