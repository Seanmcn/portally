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
      isDesktop: false,
      isTablet: false,
      isMobile: false,
      navDrawerOpen: true,
      navDrawerCondensed: false,
      accountMenuOpen: false,
    };

    constructor() {
      makeAutoObservable(this, {}, { autoBind: true });
    }

    toggleNavDrawer() {
      this.values.navDrawerOpen = !this.values.navDrawerOpen;
    }

    toggleNavDrawerCondensed() {
      this.values.navDrawerCondensed = !this.values.navDrawerCondensed;
    }

    toggleAccountMenu() {
      this.values.accountMenuOpen = !this.values.accountMenuOpen;
    }

    setIsDesktop(value) {
      this.values.isDesktop = value;
    }

    setIsTablet(value) {
      this.values.isTablet = value;
    }

    setIsMobile(value) {
      this.values.isMobile = value;
    }

    resetBasedOnDevice() {
      if (this.values.isMobile) {
        this.values.navDrawerOpen = false;
        this.values.navDrawerCondensed = false;
      }
      if (this.values.isTablet) {
        this.values.navDrawerOpen = true;
        this.values.navDrawerCondensed = true;
      }
      if (this.values.isDesktop) {
        this.values.navDrawerOpen = true;
        this.values.navDrawerCondensed = false;
      }
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
