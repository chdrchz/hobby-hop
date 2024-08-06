import React from "react";
import '../Styles/CreateAccount.css';
import Button from '../Components/Button.jsx';

function CreateAccount() {
    return (
        <div className="form-container">
            <h1>Hobby Hop</h1>
            <form action="/submit" method="post">
                <label for="full-name"></label>
                <input type="text" id="fullname" placeholder="Full Name" name="fullname" required />
                
                <label for="email"></label>
                <input type="email" id="email" placeholder="Email" name="email" required />
                
                <label for="password"></label>
                <input type="password" id="password" placeholder="Password" name="password" required />
                
                <label for="confirm-password"></label>
                <input type="password" id="confirm-password" placeholder="Confirm Password" name="confirm-password" required />
                <div className="submit">
                    <Button color="gray" label="Create Account">Create Account</Button>
                </div>
            </form>
        </div>
    )
}

export default CreateAccount;