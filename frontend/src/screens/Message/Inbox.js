import React from 'react';
import {
  useParams,
} from 'react-router-dom';
import MessageThreads from '../../components/Message/Threads';
import MessageThreadView from '../../components/Message/ThreadView';

function ScreensMessageInbox() {
  const { id } = useParams();

  console.log('thread id is: ', id);
  return (
  //  Todo: no messages?
    <div className="container">
      <div className="columns fullHeight">
        <div className="column is-one-fifth">
          <MessageThreads />
        </div>
        <div className="column fullHeight">
          {id && <MessageThreadView threadId={id} /> }
        </div>

        <div className="column is-one-fifth">
          {/*  Message Details Component */}
          <p>Details</p>
          <p>Details</p>
          <p>Details</p>
        </div>
      </div>
    </div>
  );
}
export default ScreensMessageInbox;
