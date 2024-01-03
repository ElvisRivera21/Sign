import React, { useState } from "react";

function SignUpForm() {
    // State Variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // Function to handle form submission/async function
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Hello 👋");

        try {
            //async api request POST method
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            // Check if the response is successful (status code 2xx)
            if (response.ok) {
                // Process the successful response, if needed
                console.log("Form submitted successfully");
            } else {
                // If the response is not successful, throw an error
                throw new Error(`Server error: ${response.status}`);
            }
        } catch (error) {
            // Handle errors by setting the error state
            setError(error.message);
        } finally {
            // Clear the form inputs and error state
            setUsername("");
            setPassword("");
            setError(null);
            
        }
    };

    

    return (
        <>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                {/* Username input */}
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                {/* Password input */}
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                {/* Error message */}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* Submit button */}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}


export default SignUpForm;