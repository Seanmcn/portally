import { makeAutoObservable } from 'mobx';

import {
  persistence,
  StorageAdapter,
} from 'mobx-persist-store';

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

class UserInterfaceStore {
    values = {
      navDrawerOpen: true,
      navDrawerCondensed: false,
    };

    constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
    }

    toggleNavDrawer() {
      this.values.navDrawerCondensed = false;
      this.values.navDrawerOpen = !this.values.navDrawerOpen;
    }

    toggleNavDrawerCondensed() {
      this.values.navDrawerCondensed = !this.values.navDrawerCondensed;
    }
}

// todo: probably don't need persistence?
export default persistence({
  name: 'UserInterfaceStore',
  properties: [],
  adapter: new StorageAdapter({
    read: readStore,
    write: writeStore,
  }),
  reactionOptions: {
    // optional
    delay: 200,
  },
})(new UserInterfaceStore());
