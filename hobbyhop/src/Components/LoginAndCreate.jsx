import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase/firebase-config.js';
import "../Styles/CreateAccount.css";
import Button from "./Button.jsx";

function LoginAndCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const fullName = event.target.fullname.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target['confirm-password'].value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Create a user document in Firestore
      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        createdAt: new Date(),
        uid: user.uid
      });

      console.log('Account created successfully:', user);
      navigate("/feed");
    } catch (error) {
      console.error('Error creating account:', error.message);
      alert(error.message);
    }
  };

  const handleExit = () => {
    window.location.reload(); // Reload the page
  };

  // state management for login/create account rendering
  const [isCreatingAccount, setIsCreatingAccount] = useState(true);

  const handleSignInClick = () => {
    setIsCreatingAccount(false);
  };

  const handleCreateAccountClick = () => {
    setIsCreatingAccount(true);
  };

  return (
    <div className="form-container">
      {isCreatingAccount ? (
        <form className="account-form" onSubmit={handleSubmit} method="post">
          <div className="hobbyhoplogo">
            <h1>Hop In!</h1>
            <div className="exit-create-account">
              <svg
                onClick={handleExit}
                width="25"
                height="25"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_119_21)">
                  <path
                    d="M54.8725 40.7425L78.5325 17.0825C82.4425 13.1725 82.4425 6.8425 78.5325 2.9425C74.6225 -0.9575 68.2925 -0.9575 64.3925 2.9425L40.7325 26.6025L17.0725 2.9325C13.1625 -0.9775 6.8325 -0.9775 2.9325 2.9325C-0.9675 6.8425 -0.9675 13.1725 2.9325 17.0725L26.5925 40.7325L2.9325 64.3925C-0.9775 68.3025 -0.9775 74.6325 2.9325 78.5325C6.8425 82.4325 13.1725 82.4325 17.0725 78.5325L40.7325 54.8725L64.3925 78.5325C68.3025 82.4425 74.6325 82.4425 78.5325 78.5325C82.4325 74.6225 82.4325 68.2925 78.5325 64.3925L54.8725 40.7325V40.7425Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_21">
                    <rect width="81.465" height="81.465" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <label htmlFor="full-name"></label>
          <input
            type="text"
            id="fullname"
            placeholder="Full Name"
            name="fullname"
            required
          />

          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />

          <label htmlFor="confirm-password"></label>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            name="confirm-password"
            required
          />
          <div className="submit">
            <Button color="#b8cc76">create account</Button>
          </div>
          <div className="login">
            <p>
              already have an account?{" "}
              <button
                className="login-button"
                type="button"
                onClick={handleSignInClick}
              >
                sign in
              </button>
            </p>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit} method="post">
          <div className="hobbyhoplogo">
            <h1>Welcome Back!</h1>
            <div className="exit-login">
            <svg
                onClick={handleExit}
                width="25"
                height="25"
                viewBox="0 0 82 82"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_119_21)">
                  <path
                    d="M54.8725 40.7425L78.5325 17.0825C82.4425 13.1725 82.4425 6.8425 78.5325 2.9425C74.6225 -0.9575 68.2925 -0.9575 64.3925 2.9425L40.7325 26.6025L17.0725 2.9325C13.1625 -0.9775 6.8325 -0.9775 2.9325 2.9325C-0.9675 6.8425 -0.9675 13.1725 2.9325 17.0725L26.5925 40.7325L2.9325 64.3925C-0.9775 68.3025 -0.9775 74.6325 2.9325 78.5325C6.8425 82.4325 13.1725 82.4325 17.0725 78.5325L40.7325 54.8725L64.3925 78.5325C68.3025 82.4425 74.6325 82.4425 78.5325 78.5325C82.4325 74.6225 82.4325 68.2925 78.5325 64.3925L54.8725 40.7325V40.7425Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_119_21">
                    <rect width="81.465" height="81.465" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            name="email"
            required
          />

          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            required
          />

          <div className="submit">
            <Button color="#b8cc76">log in</Button>
          </div>
          <div className="signup">
            <p>
              Don't have an account?{" "}
              <button
                className="signup-button"
                type="button"
                onClick={handleCreateAccountClick}
              >
                create account
              </button>
            </p>
          </div>
        </form>
      )}
    </div>
  );
}

export default LoginAndCreate;
