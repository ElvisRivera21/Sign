import React, { useState } from "react";

function Authenticate({ token }) {
    // State variable for handling errors
    const [error, setError] = useState(null);

    // Function to handle the authentication button click
    const handleClick = async () => {
        try {
            // Clear previous errors
            setError(null);

            // Simulate a network request (replace with your actual API request)
            const response = await fetch(
                "https://fsa-jwt-practice.herokuapp.com/authenticate",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                }
            );

            if (response.ok) {
                const result = await response.json();
                console.log("Authentication successful:", result);
                // Handle successful authentication result here
            } else {
                throw new Error(`Authentication error: ${response.status}`);
            }
        } catch (error) {
            console.error("Error during authentication:", error.message);
            // Set the error state
            setError(error.message);
        }
    };

    return (
        <>
            <h2>Authenticate</h2>

            {/* Button to trigger authentication */}
            <button onClick={handleClick}>Authenticate Token</button>

            {/* Display error message if there is an error */}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    );
}

export default Authenticate;