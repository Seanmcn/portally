import {  makeAutoObservable, action } from 'mobx';
import api from '../utils/api'

class AuthStore {
  inProgress = false;
  errors = undefined;

  values = {
    email: '',
    password: '',
  };

  constructor () {
    makeAutoObservable(this)
  }

  setEmail(email) {
    this.values.email = email;
  }

  setPassword(password) {
    this.values.password = password;
  }

  reset() {
    this.values.email = '';
    this.values.password = '';
  }

  login() {
    this.inProgress = true;
    this.errors = undefined;

    // return
    api.get('/sanctum/csrf-cookie')
    .then(() => {
      api.post('/login', {
        email: this.values.email,
        password: this.values.password
      }).catch(action((err) => {
        this.errors = err.message;
      }))
      .finally(action(() => { this.inProgress = false; }));
    }
    ).catch(action((err) => {
      console.log(err);
      this.errors = err.message;
    }));

  }

  register() {
    this.inProgress = true;
    this.errors = undefined;
  }

  logout() {
  }
}

export default new AuthStore()
