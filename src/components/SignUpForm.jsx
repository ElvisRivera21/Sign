import React, { useState } from "react";

function SignUpForm({setToken}) {
    // State Variables
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    // Function to handle form submission/async function
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
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

            if (response.ok) {
                const result = await response.json();

                // Call the setToken function passed as a prop from the parent
                setToken(result.token);

                console.log("Form submitted successfully");
            } else {
                throw new Error(`Server error: ${response.status}`);
            }
        } catch (error) {
            setError(error.message);
        } finally {
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