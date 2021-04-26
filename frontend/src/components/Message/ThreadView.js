import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import { PropTypes as ReactPropTypes } from 'prop-types';
import ThreadPreview from './ThreadPreview';
import MessageSingle from './MessageSingle';
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
      <div className="chatWrapper">
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
            <div className="chatActionInner">
              <div className="control">
                <textarea rows="1" className="chatTextArea" />
                <div className="dropdown">
                  <div>
                    <div className="chatAddButton"><i className="fas fa-plus-square" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ThreadPreview.defaultProps = {
  threadId: 0,
};

MessageThreadView.propTypes = {
  MessageStore: PropTypes.observableObject.isRequired,
  threadId: ReactPropTypes.string.isRequired,
};

export default inject('MessageStore')(observer(MessageThreadView));
