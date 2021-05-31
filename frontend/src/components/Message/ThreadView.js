import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { PropTypes as ReactPropTypes } from 'prop-types';
import MessageSingle from './Single';
import './ThreadView.css';

class MessageThreadView extends React.Component {
  componentDidMount() {
    const { MessageStore, threadId } = this.props;
    MessageStore.getThread(threadId);
  }

  componentDidUpdate(prevProps) {
    const { MessageStore, threadId } = this.props;

    if (prevProps.threadId !== threadId) {
      MessageStore.getThread(threadId);
    }
  }

  render() {
    const { MessageStore } = this.props;
    const { values } = MessageStore;
    const { selectedThread } = values;
    const {
      thread, users, messages, userId,
    } = selectedThread;
    console.log('thread', thread);
    console.log('users', users);
    console.log('messages in render', messages);
    if (messages === undefined) {
      return null;
    }
    return (
      <div className="chatWrapper messageMainView">
        <div className="chatBody">
          <div className="chatBodyInner">
            {messages.map((message) => (
              <MessageSingle
                message={message}
                key={message.id}
                userId={userId}
              />
            ))}
          </div>
          <div className="chatActions">
            <span className="material-icons chatActionAdd">add</span>
            <textarea rows="1" className="chatActionTextArea" />
            <span className="material-icons chatActionSend">send</span>
          </div>
        </div>
      </div>
    );
  }
}

// todo: why have i put this here?
// MessageThreadView.defaultProps = {
//   threadId: 0,
// };

MessageThreadView.propTypes = {
  MessageStore: PropTypes.observableObject.isRequired,
  threadId: ReactPropTypes.string.isRequired,
};

export default inject('MessageStore')(observer(MessageThreadView));
