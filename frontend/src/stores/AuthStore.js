import {  makeAutoObservable, action } from 'mobx';
import api from '../utils/api'

class AuthStore {
  inProgress = false;
  errors = undefined;

  values = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  };

  constructor () {
    makeAutoObservable(this)
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

  setConfirmPassword(confirmPassword){
    this.values.confirmPassword = confirmPassword;
  }

  setDateOfBirth(dateOfBirth) {
    this.values.dateOfBirth = dateOfBirth;
  }

  reset() {
    this.values.name = ';'
    this.values.email = '';
    this.values.dateOfBirth=''
    this.values.password = '';
    this.values.confirmPassword = ''
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

    api.get('/sanctum/csrf-cookie')
        .then(() => {
              api.post('/register', {
                email: this.values.email,
                password: this.values.password,
                name: this.values.name,
                dateOfBirth : this.values.dateOfBirth,
                confirmPassword : this.values.confirmPassword,
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

  logout() {
  }
}

export default new AuthStore()
