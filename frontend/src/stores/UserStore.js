import { makeAutoObservable, action } from 'mobx';

import {
  persistence,
  StorageAdapter,
} from 'mobx-persist-store';

import dayjs from 'dayjs';
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

class UserStore {
  inProgress = false;

  authenticated = false;

  authenticatedTime = undefined;

  registered = false;

  errors = undefined;

  errorsPasswordUpdate = undefined;

  values = {
    name: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: '',
    newPassword: '',
    resetToken: '',
    inviteCode: '',
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

  setNewPassword(newPassword) {
    this.values.newPassword = newPassword;
  }

  setDateOfBirth(dateOfBirth) {
    this.values.dateOfBirth = dateOfBirth;
  }

  setResetToken(resetToken) {
    this.values.resetToken = resetToken;
  }

  setInviteCode(inviteCode) {
    this.values.inviteCode = inviteCode;
  }

  reset() {
    this.values.name = ';';
    this.values.email = '';
    this.values.dateOfBirth = '';
    this.values.password = '';
    this.values.confirmPassword = '';
    this.values.newPassword = '';
    this.values.resetToken = '';
    this.values.inviteCode = '';
  }

  get() {
    this.inProgress = true;
    this.errors = undefined;

    api.get('/api/user', {
    })
      .then(action((response) => {
        this.values.name = response.data.name;
        this.values.email = response.data.email;
        this.values.dateOfBirth = response.data.date_of_birth;
      }))
      .catch(action((err) => {
        this.errors = {};
        this.errors.system = err.message;
      }))
      .finally(action(() => {
        this.inProgress = false;
      }));
  }

  update() {
    this.inProgress = true;
    this.errors = undefined;
    api.post('/api/user/info', {
      email: this.values.email,
      name: this.values.name,
      date_of_birth: this.values.dateOfBirth,
    })
      .then(action(() => {
        this.errors = undefined;
      }))
      .catch(action((err) => {
        this.errors = err.response.data.errors;
      }))
      .finally(action(() => { this.inProgress = false; this.authenticated = true; }));
  }

  updatePassword() {
    this.inProgress = true;
    this.errorsPasswordUpdate = undefined;
    api.post('/api/user/password', {
      password: this.values.password,
      new_password: this.values.newPassword,
      confirm_password: this.values.confirmPassword,
    })
      .then(action(() => {
        this.errorsPasswordUpdate = undefined;
      }))
      .catch(action((err) => {
        this.errorsPasswordUpdate = err.response.data.errors;
      }))
      .finally(action(() => { this.inProgress = false; this.authenticated = true; }));
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
        })
          .then(action(() => {
            this.authenticated = true;
            this.authenticatedTime = dayjs();
          }))
          .catch(action((err) => {
            this.errors = err.message;
          }))
          .finally(action(() => {
            this.inProgress = false;
          }));
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
          invite_code: this.values.inviteCode,
        })
          .then(action(() => {
            this.errors = undefined;
            this.registered = true;
          }))
          .catch(action((err) => {
            this.errors = err.response.data.errors;
          }))
          .finally(action(() => {
            this.inProgress = false;
          }));
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
    })).then(action(() => {
      this.errors = undefined;
      this.authenticated = false;
      this.authenticatedTime = undefined;
    })).finally(action(() => {
      this.inProgress = false;
    }));
  }

  forgotPassword() {
    this.inProgress = true;

    api.get('/sanctum/csrf-cookie')
      .then(() => {
        api.post('/password/email', {
          email: this.values.email,
        }).then(action(() => {
          this.errors = undefined;
        })).catch(action((err) => {
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

  resetPassword() {
    this.inProgress = true;
    api.get('/sanctum/csrf-cookie')
      .then(() => {
        api.post('/password/reset', {
          token: this.values.resetToken,
          email: this.values.email,
          password: this.values.password,
          password_confirmation: this.values.confirmPassword,
        }).then(action(() => {
          this.errors = undefined;
        })).catch(action((err) => {
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

  // todo: change to checking if authorised on API / cover with initial API call.
  checkAuthTime() {
    if (this.authenticatedTime === undefined) {
      this.authenticated = false;
      return;
    }
    if (dayjs() >= dayjs(this.authenticatedTime).add(2, 'hour')) {
      this.authenticated = false;
      this.authenticatedTime = undefined;
    }
  }
}

export default persistence({
  name: 'UserStore',
  properties: ['authenticated', 'authenticatedTime'],
  adapter: new StorageAdapter({
    read: readStore,
    write: writeStore,
  }),
  reactionOptions: {
    // optional
    delay: 200,
  },
})(new UserStore());
