import React, { useState } from 'react';
import SignUpForm from './SignUpForm'
import { toast } from 'react-toastify'
import PropTypes from "prop-types";



const ManageSignUp = (props) => {
    const testData = []

    // inputText stores inputdata from the form which stores the form state
    const [registrationInputData, setInputtext] = useState({
        email: " ",
        username: "",
        password: "",
        cpassword: ""
    })
    const handleChange = ({ target }) => {
        //const updatedText = { ...inputText, [target.name]: target.value }
        //make o copy of the inputtext and set the value based on what is passed in
        // pass an object that has the new state which will be inputext then grab
        // the value typed by the user and assign it to the object
        //Allows us to change the state of our input
        setInputtext({ ...registrationInputData, [target.name]: target.value })

    }
    const clearState = () => {
        //clears the input field
        return setInputtext({
            email: " ",
            username: "",
            password: "",
            cpassword: ""
        })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        if (event.target.email.value === "" || event.target.username.value === ""
            || event.target.password.value === "" || event.target.cpassword.value === ""
        ) {
            toast.error("all fields are required")
            clearState()
            return false
        }
        if (event.target.password.value.length < 6) {
            toast.error("Passwords must be more that 6 characters")
            clearState()
            return false
        }
        if (event.target.password.value !== event.target.cpassword.value) {
            toast.error("Passwords do not match")
            clearState()
            return false
        }




        testData.push(registrationInputData)
        //setTestData([registrationInputData])
        //setTestData(testData => [...testData, registrationInputData]);

        console.log(testData)
        toast.success("registration complete")
        props.history.push("/")
        clearState()





    }



    return (
        <>
            <SignUpForm inputText={registrationInputData} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    )
}

export default ManageSignUp