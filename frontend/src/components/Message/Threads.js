import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import MessageThreadPreview from './ThreadPreview';

class MessageThreads extends React.Component {
  componentDidMount() {
    const { MessageStore } = this.props;
    MessageStore.get();
  }

  render() {
    const { MessageStore } = this.props;
    const { values } = MessageStore;
    const { threads } = values;
    return (
      <ul>
        {threads.map((object) => <MessageThreadPreview thread={object} key={object.id} />)}
      </ul>
    );
  }
}

MessageThreads.propTypes = {
  MessageStore: PropTypes.observableObject.isRequired,
};

export default inject('MessageStore')(observer(MessageThreads));
