import React from 'react';
import PropTypes from 'prop-types';

const UIErrorMessages = (props) => {
  const { errors } = props;
  if (!errors) return false;

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

UIErrorMessages.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
};
export default UIErrorMessages;
