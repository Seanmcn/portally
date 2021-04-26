import { makeAutoObservable, action } from 'mobx';

import {
  persistence,
  StorageAdapter,
} from 'mobx-persist-store';

import api from '../utils/api';

function readStore(name) {
  return new Promise((resolve) => {
    const data = localStorage.getItem(name);
    resolve(data);
  });
}

function writeStore(name, content) {
  return new Promise((resolve) => {
    localStorage.setItem(name, content);
    resolve();
  });
}

class MessageStore {
    inProgress = false;

    errors = undefined;

  values = {
    threads: [],
    selectedThread: [],
  };

  constructor() {
    makeAutoObservable(this);
  }

  get() {
    this.inProgress = true;
    this.errors = undefined;

    api.get('/api/messages', {
    })
      .then(action((response) => {
        this.values.threads = response.data.threads;
      }))
      .catch(action((err) => {
        this.errors = {};
        this.errors.system = err.message;
      }))
      .finally(action(() => {
        this.inProgress = false;
      }));
  }

  getThread(threadId) {
    console.log('getThread, threadId', threadId);
    if (threadId === 0) {
      return;
    }

    this.inProgress = true;
    this.errors = undefined;
    this.values.selectedThread = {};

    api.get(`/api/messages/thread/${threadId}`, {
    })
      .then(action((response) => {
        this.values.selectedThread = {
          thread: response.data.thread,
          users: response.data.users,
          messages: response.data.messages,
          userId: response.data.userId,
        };
      }))
      .catch(action((err) => {
        this.errors = {};
        this.errors.system = err.message;
      }))
      .finally(action(() => {
        this.inProgress = false;
      }));
  }
}

export default persistence({
  name: 'MessageStore',
  properties: ['authenticated'],
  adapter: new StorageAdapter({
    read: readStore,
    write: writeStore,
  }),
  reactionOptions: {
    // optional
    delay: 200,
  },
})(new MessageStore());
