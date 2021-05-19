import React from 'react';
import { connect } from "react-redux";
import Radio from '@material-ui/core/Radio';
import { setActiveGear } from "../../../../../../../store/settings/actions";

function ActiveToggler({ bike, setActiveGear }) {
  const handleChange = async () => {
    await setActiveGear({ _id: bike._id });
  }

  return (
    <Radio
      checked={bike.active}
      onChange={handleChange}
      value={bike._id}
      name="active"
      style={{ "color": "#146bff"}}
    />
  )
}

function mapDispatchToProps(dispatch) {
  return {
    setActiveGear: (data) => dispatch(setActiveGear(data)),
  }
}

export default connect(null, mapDispatchToProps)(ActiveToggler);
