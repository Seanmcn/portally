import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import MessageThreads from '../../components/Message/ThreadLinkList';
import MessageThreadView from '../../components/Message/ThreadView';
import './Inbox.scss';

function ScreensMessageInbox() {
  const { id } = useParams();
  return (
    <div className="flex-container">
      <MessageThreads />
      {id && <MessageThreadView threadId={id} /> }
      <div className="messageDetailsView">
        {/*  Message Details Component */}
        <p>Details</p>
        <p>Details</p>
        <p>Details</p>
      </div>
    </div>
  );
}
export default ScreensMessageInbox;
