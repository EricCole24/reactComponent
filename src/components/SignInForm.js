import React from 'react'
import tedd from '../images/tedd-3.jpg'
import '../components/SignInForm.css'

const SignInForm = (props) => {

    return (
        <div className="wrapper">
            <form className="container jumbotron" onSubmit={props.onSubmit}>
                <div>
                    <img src={tedd} alt="ige" style={{ width: 90, height: 90, marginLeft: "240px", marginTop: "0.5px" }} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <div className="field">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            className="form-control"
                            onChange={props.onChange}
                            value={props.signInData.email}



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
                            onChange={props.onChange}
                            value={props.signInData.password}




                        />
                    </div>
                </div>




                <input type="submit"
                    id='sub'
                    value="Sign In"
                    className="btn btn-danger"
                    style={{ padding: "0.2em 0em", marginLeft: "240px", width: "15%", marginTop: "10px", color: "black", backgroundColor: "orange" }} />
            </form>
        </div>
    );
}

export default SignInForm;
