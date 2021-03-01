import React from 'react';
import {inject, observer} from "mobx-react";

class Register extends React.Component {

    handleNameChange = e => {
        this.props.AuthStore.setName(e.target.value);
    }

    handleEmailChange = e => {
        this.props.AuthStore.setEmail(e.target.value);
    };

    handleDateOfBirthChange = e => {
        this.props.AuthStore.setDateOfBirth(e.target.value);
    }

    handlePasswordChange = e => {
        this.props.AuthStore.setPassword(e.target.value);
    };

    handleConfirmPasswordChange = e => {
        this.props.AuthStore.setConfirmPassword(e.target.value)
    }

    handleSubmitForm = e => {
        e.preventDefault();
        // todo: check form is valid before??
        this.props.AuthStore.register();
    };

    render() {
        const {values, errors, inProgress} = this.props.AuthStore;
        return (
            <form onSubmit={this.handleSubmitForm}>

                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input
                            type="text"
                            className="input"
                            placeholder="Your name"
                            autoComplete="name"
                            value={values.name}
                            onChange={this.handleNameChange}
                        />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            type="email"
                            className="input"
                            placeholder="Your email"
                            value={values.email}
                            onChange={this.handleEmailChange}
                            autoComplete="email"
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope"/>
                        </span>
                    </div>
                </div>

                <div className={"field"}>
                    <label className="label">Date of Birth</label>
                    <input
                        type="date"
                        className="input"
                        value={values.dateOfBirth}
                        onChange={this.handleDateOfBirthChange}
                        autoComplete="bday"
                        required
                    />
                </div>

                <div className="field">
                    <label className="label">Password</label>
                        <input
                            type="password"
                            className="input"
                            value={values.password}
                            placeholder="Your password"
                            onChange={this.handlePasswordChange}
                            autoComplete="new-password"
                            data-lpignore="true"
                            required
                        />
                </div>

                <div className="field">
                    <label className="label">Confirm Password</label>
                        <input
                            type="password"
                            className="input"
                            placeholder="Confirm password"
                            value={values.confirmPassword}
                            onChange={this.handleConfirmPasswordChange}
                            autoComplete="new-password"
                            data-lpignore="true"
                            required
                        />
                </div>

                <div className="control">
                    <button
                        type="submit"
                        className="button is-link"
                        disabled={inProgress}
                    >
                        Register
                    </button>
                </div>
            </form>

        )
    }
}

export default inject('AuthStore')(observer(Register));