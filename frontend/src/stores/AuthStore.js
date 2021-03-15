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

class AuthStore {
  inProgress = false;

  authenticated = false;

  errors = undefined;

  values = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  setName(name) {
    this.values.name = name;
  }

  setEmail(email) {
    this.values.email = email;
  }

  setPassword(password) {
    this.values.password = password;
  }

  setConfirmPassword(confirmPassword) {
    this.values.confirmPassword = confirmPassword;
  }

  setDateOfBirth(dateOfBirth) {
    this.values.dateOfBirth = dateOfBirth;
  }

  reset() {
    this.values.name = ';';
    this.values.email = '';
    this.values.dateOfBirth = '';
    this.values.password = '';
    this.values.confirmPassword = '';
  }

  login() {
    this.inProgress = true;
    this.errors = undefined;

    // return
    api.get('/sanctum/csrf-cookie')
      .then(() => {
        api.post('/login', {
          email: this.values.email,
          password: this.values.password,
        }).catch(action((err) => {
          this.errors = err.message;
        }))
          .finally(action(() => { this.inProgress = false; this.authenticated = true; }));
      }).catch(action((err) => {
      // todo: test what we get back on this failure
      // eslint-disable-next-line no-console
        console.log(err);
        this.errors = err.message;
      }));
  }

  register() {
    this.inProgress = true;
    this.errors = undefined;

    api.get('/sanctum/csrf-cookie')
      .then(() => {
        api.post('/register', {
          email: this.values.email,
          password: this.values.password,
          name: this.values.name,
          date_of_birth: this.values.dateOfBirth,
          password_confirmation: this.values.confirmPassword,
        }).catch(action((err) => {
          this.errors = err.response.data.errors;
        }))
          .finally(action(() => { this.inProgress = false; this.authenticated = true; }));
      }).catch(action((err) => {
      // todo: test what we get back on this failure
      // eslint-disable-next-line no-console
        console.log(err);
        this.errors = err.response.data.errors;
      }));
  }

  logout() {
    api.post('/logout', {}).catch(action((err) => {
      this.errors = err.response.data.errors;
    })).finally(action(() => {
      this.inProgress = false;
      this.authenticated = false;
    }));
  }

  resetPassword() {
    this.inProgress = true;

    api.get('/sanctum/csrf-cookie')
      .then(() => {
        api.post('/password/email', {
          email: this.values.email,
        }).catch(action((err) => {
          this.errors = err.response.data.errors;
        }))
          .finally(action(() => { this.inProgress = false; }));
      }).catch(action((err) => {
      // todo: test what we get back on this failure
      // eslint-disable-next-line no-console
        console.log(err);
        this.errors = err.response.data.errors;
      }));
  }
}

export default persistence({
  name: 'AuthStore',
  properties: ['authenticated'],
  adapter: new StorageAdapter({
    read: readStore,
    write: writeStore,
  }),
  reactionOptions: {
    // optional
    delay: 200,
  },
})(new AuthStore());
