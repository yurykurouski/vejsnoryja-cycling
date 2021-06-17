import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Input from '../../../../../common/input/Input';
import { changeUserEmail } from '../../../../../../store/current-user/actions';
import ValidationErrMsg from '../../../../../common/validation-err-msg/ValidationErrMsg';

function EmailChangeForm({ changeUserEmail, userEmail, authErrors }) {
  const validationSchema = Yup.object().shape({
    email: Yup
      .string()
      .email('Email invalid format.')
      .required('Email cannot be empty.'),
    password: Yup
      .string()
      .required('Password can not be empty.'),
  });

  const submitEmailChange = async (data, actions) => {
    await changeUserEmail(data);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={submitEmailChange}
      validationSchema={validationSchema}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        errors,
        touched,
      }) => (
        <form
          className="my-account__form second-layer-card"
          onSubmit={handleSubmit}
        >
          <Input
            name="email"
            type="text"
            title="Change Email Address"
            customInputClass="my-account__input"
            placeholder={userEmail}
            value={values.email}
            onChange={handleChange}
          />

          {(errors.email && touched.email) ? (
            <ValidationErrMsg errorMsg={errors.email} />
          ) : null}

          <Input
            name="password"
            type="password"
            placeholder="Confirm with password"
            customInputClass="my-account__input"
            value={values.password}
            onChange={handleChange}
          />

          {(errors.password && touched.password) || authErrors.email ? (
            <ValidationErrMsg errorMsg={errors.password || authErrors.email} />
          ) : null}

          <button type="submit" className="my-account__submit-email-change submit-btn">Update</button>
        </form>
      )}
    </Formik>
  );
}

EmailChangeForm.propTypes = {
  changeUserEmail: PropTypes.func.isRequired,
  userEmail: PropTypes.string.isRequired,
  authErrors: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    userEmail: state.currentUser.userEmail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeUserEmail: (data) => dispatch(changeUserEmail(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailChangeForm);
