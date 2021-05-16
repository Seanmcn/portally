import React from 'react';
import PropTypes from 'prop-types';

const UIErrorMessages = (props) => {
  const { errors } = props;
  console.log(JSON.stringify(errors));
  if (!errors) return false;
  if (typeof errors !== 'object') return false;

  const errorMessages = Object.keys(errors)
    .map((key) => errors[key]
      .map((error) => <li className="help is-danger">{error}</li>));

  return (
    <article className="message is-danger">
      <div className="message-header">
        Error
      </div>
      <div className="message-body content help">
        <ul className="mt-0">
          {errorMessages}
        </ul>
      </div>
    </article>

  );
};
UIErrorMessages.defaultProps = {
  errors: null,
};

UIErrorMessages.propTypes = {
  errors: PropTypes.object,
};
export default UIErrorMessages;
