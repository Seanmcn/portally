import React from 'react';
import { inject, observer, PropTypes } from 'mobx-react';
import MessageThreadLink from './ThreadLink';
import './ThreadLinkList.scss';

class ThreadLinkList extends React.Component {
  componentDidMount() {
    const { MessageStore } = this.props;
    MessageStore.get();
  }

  render() {
    const { MessageStore } = this.props;
    const { values } = MessageStore;
    const { threads } = values;
    return (
      <div className="threadPreviewContainer messageThreadView">
        {threads.map((object) => <MessageThreadLink thread={object} key={object.id} />)}
      </div>
    );
  }
}

ThreadLinkList.propTypes = {
  MessageStore: PropTypes.observableObject.isRequired,
};

export default inject('MessageStore')(observer(ThreadLinkList));
