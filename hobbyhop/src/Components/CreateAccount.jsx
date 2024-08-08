import React from "react";
import { useNavigate } from 'react-router-dom';
import '../Styles/CreateAccount.css';
import Button from '../Components/Button.jsx';

function CreateAccount() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form validation or submission logic here

        // Navigate to the Feed page
        navigate('/feed');
    };

    return (
        <div className="form-container">
            <h1>Hobby Hop</h1>
            <form onSubmit={handleSubmit} method="post">
                <label htmlFor="full-name"></label>
                <input type="text" id="fullname" placeholder="Full Name" name="fullname" required />
                
                <label htmlFor="email"></label>
                <input type="email" id="email" placeholder="Email" name="email" required />
                
                <label htmlFor="password"></label>
                <input type="password" id="password" placeholder="Password" name="password" required />
                
                <label htmlFor="confirm-password"></label>
                <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirm-password" required />
                <div className="submit">
                    <Button color="gray" label="Create Account">Create Account</Button>
                </div>
            </form>
        </div>
    );
}

export default CreateAccount;