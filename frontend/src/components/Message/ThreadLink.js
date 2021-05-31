import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './ThreadLink.scss';

const MessageThreadLink = (props) => {
  const { thread } = props;
  const { users } = thread;
  let subject;
  const countUsersThread = users.length;
  // If this is a direct message, the subject should be the user it is from
  if (countUsersThread === 1) {
    subject = users.map((object) => (<>{object.name}</>));
  } else {
    subject = thread.subject;
  }
  return (
    <NavLink to={`/messages/thread/${thread.id}`} title="Messages" className="threadPreviewLink">
      <span className="material-icons threadPreviewAvatar">account_circle</span>
      <span className="threadPreviewSubject">{subject}</span>
    </NavLink>
  );
};
MessageThreadLink.defaultProps = {
  thread: null,
};

MessageThreadLink.propTypes = {
  thread: PropTypes.object,
};
export default MessageThreadLink;
