import React from 'react'
import HomePage from './HomePage'
import Header from './common/Header'
import AboutPage from './About'
import { Route } from 'react-router-dom'
import ManageSignUp from './ManageSignUpForm'
import { ToastContainer } from 'react-toastify'
import ManageSignInForm from './ManageSignInForm'
import "react-toastify/dist/ReactToastify.css"
function App() {

    return (
        <div className="container-fluid">
            <ToastContainer autoClose={3000} hideProgressBar={false} />
            <Header />
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />

            <Route path="/signupform" component={ManageSignUp} />
            <Route path="/signinform" component={ManageSignInForm} />


        </div>
    )
}
export default App;