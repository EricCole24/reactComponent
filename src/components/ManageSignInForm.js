import React, { useState, useEffect } from 'react';
import SignInForm from './SignInForm'
//import '../components/SignInForm.css'
import { toast } from 'react-toastify'

const ManageSignInForm = (props) => {
    const [testData, setTestData] = useState("")
    const [signInData, setSignInData] = useState({
        email: "",
        password: ""
    })
    const handleChange = ({ target }) => {
        //const updatedText = { ...inputText, [target.name]: target.value }
        //make o copy of the inputtext and set the value based on what is passed in
        // pass an object that has the new state which will be inputext then grab
        // the value typed by the user and assign it to the object
        //Allows us to change the state of our input
        setSignInData({ ...signInData, [target.name]: target.value })

    }
    const handleSubmit = event => {
        event.preventDefault()
        setTestData([...testData, signInData])
        //testData.push(signInData)
        //setTestData([registrationInputData])
        //setTestData(testData => [...testData, registrationInputData]);

        console.log(testData)
        toast.success("sucessfully signed in")
        props.history.push("/signinform")
        clearState()
    }

    const clearState = () => {
        //clears the input field
        return setSignInData({
            email: " ",
            password: ""

        })
    }
    return (
        <>
            <SignInForm onChange={handleChange} signInData={signInData} onSubmit={handleSubmit} />
        </>
    )
}

export default ManageSignInForm