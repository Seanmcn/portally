import React from 'react';
import PropTypes from 'prop-types';
import './Single.scss';
import dayjs from 'dayjs';

const MessageSingle = (props) => {
  const { message, userId } = props;

  const className = userId === message.user_id ? 'isSent' : 'isReceived';
  return (
    <div className={`chatMessage ${className}`}>
      <img src="https://via.placeholder.com/300x300" alt="" />
      <div className="messageBlock">
        <span>{dayjs(message.created_at).format('ddd DD MMM hh:mm:ss a')}</span>
        <div className="messageText">
          {message.body}
        </div>
      </div>
    </div>
  );
};

MessageSingle.propTypes = {
  message: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};
export default MessageSingle;
