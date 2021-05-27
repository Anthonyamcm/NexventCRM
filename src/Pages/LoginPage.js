import React from 'react';

export default function LoginPage() {
    return (
        <div className="app-container">
            <div className="columns is-desktop">
                <div className="column is-two-fifths pr-0">
                    <div className="background"></div>
                </div>
                <div className="column p-0 m-0">
                    <div className="form-container">
                        <nav className="level pt-5 pr-5 ">
                            <div className="container">
                                <div className="navbar-menu" id="mainNav">
                                    <div className="navbar-end">
                                        <p className="navbar-item is-size-5">Don't have an account ?</p>
                                        <a href="/Register" className="button is-size-5">Register</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div className="columns is-desktop is-centered is-vcentered">
                        <div className="form-content column is-half mt-6 is-vcentered">
                            <h1 className="title is-2">Welcome Back</h1>
                            <h2 className="subtitle is-4">Login to your account</h2>
                            <form className="form">
                                <div className="field mt-2 pt-0">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input" type="email" placeholder="name@company.com"/>
                                    </div>
                                </div>
                                <div className="field pt-5">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="••••••••••••••••"/>
                                    </div>
                                </div>
                                <div>
                                    <button className="button is-primary is-medium">Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};