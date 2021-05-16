import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const MessageThreadPreview = (props) => {
  const { thread } = props;
  const { users } = thread;

  const countUsersThread = users.length;
  if (countUsersThread === 1) {
    return users.map((object) => (
      <li key={thread.id}>
        {' '}
        <NavLink to={`/messages/thread/${thread.id}`} title="Messages">{object.name}</NavLink>
      </li>
    ));
  }
  return (
    <NavLink to={`/messages/thread/${thread.id}`} title="Messages">
      <li key={thread.id}>
        {thread.subject}
      </li>
    </NavLink>
  );
};
MessageThreadPreview.defaultProps = {
  thread: null,
};

MessageThreadPreview.propTypes = {
  thread: PropTypes.object,
};
export default MessageThreadPreview;
