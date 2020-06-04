import React from "react";
import tedd from '../images/tedd-2.jpg'
import PropTypes from "prop-types";

const SignUpForm = (props) => {

    return (
        <form className="container" onSubmit={props.onSubmit}>
            <div>
                <img src={tedd} alt="ige" style={{ width: 90, height: 90, marginLeft: "500px", marginTop: "0.2px" }} />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <div className="field">
                    <input
                        id="email"
                        type="email"
                        name="email"
                        onChange={props.onChange}
                        className="form-control"
                        value={props.inputText.email}


                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="username">Username</label>
                <div className="field">
                    <input
                        id="username"
                        type="text"
                        name="username"
                        className="form-control"
                        value={props.inputText.username}
                        onChange={props.onChange}



                    />
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="field">
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-control"
                        value={props.inputText.password}
                        onChange={props.onChange}
                        autoComplete="new password"



                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="cpassword">Confirm password</label>
                <div className="field">
                    <input
                        type="password"
                        id="cpassword"
                        name="cpassword"
                        className="form-control"
                        value={props.inputText.cpassword}
                        onChange={props.onChange}
                        autoComplete="new password"

                    />
                </div>
            </div>

            <input type="submit"
                value="Sign Up"
                className="btn btn-primary"
                style={{ padding: "0.2em 5em", marginLeft: "465px" }} />
        </form>

    );
}

export default SignUpForm;