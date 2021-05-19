import React from 'react';
import { connect } from "react-redux";
import { setActiveGear } from "../../../../../../../store/settings/actions";

function ActiveToggler({ bike, setActiveGear }) {
  const handleChange = async () => {
    await setActiveGear({ _id: bike._id });
  }

  return (
    <input
      type="radio"
      name="active"
      value={bike._id}
      checked={bike.active}
      onChange={handleChange}
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveGear: (data) => dispatch(setActiveGear(data)),
  }
}

export default connect(null, mapDispatchToProps)(ActiveToggler);
