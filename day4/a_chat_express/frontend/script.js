    // ==============================================
    // 🎯 PURPOSE:
    // This script connects the HTML page (user input & button)
    // to your backend API (http://localhost:3001/api/chat)
    // It sends the user's message to the backend,
    // waits for the AI’s response, and then displays it on the page.
    // ==============================================
 
 
    // -------------------------------------------------
    // 🔹 STEP 1: GET REFERENCES TO HTML ELEMENTS
    // -------------------------------------------------
 
 
    // Get the "Send" button element by its ID
    const button = document.getElementById("fetch-btn");
 
 
    // Get the element where we'll display the AI’s response
    const output = document.getElementById("output");
 
 
    // Get the user input field element where user types their question/message
    const input = document.getElementById("user-input");
 
 
    // -------------------------------------------------
    // 🔹 STEP 2: ADD EVENT LISTENER FOR BUTTON CLICK
    // -------------------------------------------------
 
 
    // When the button is clicked, we’ll run an async function to talk to the backend
    button.addEventListener("click", async () => {
 
 
      // -------------------------------------------------
      // 📝 STEP 3: READ USER INPUT
      // -------------------------------------------------
 
 
      // Get whatever the user typed in the input box
      // If the input is empty, default message will be "Hello"
      const message = input.value || "Hello";
 
 
      // Before sending the message, show a loading text to inform the user
      output.textContent = "⏳ Thinking...";
 
 
      // -------------------------------------------------
      // 🌐 STEP 4: SEND MESSAGE TO BACKEND SERVER
      // -------------------------------------------------
      try {
        // Send an HTTP POST request to your backend (localhost:3001/api/chat)
        // Include the user's message in the request body as JSON
        const res = await fetch("http://localhost:3001/api/chat", {
          method: "POST",                     // Type of request
          headers: { "Content-Type": "application/json" },  // Tell server we're sending JSON
          body: JSON.stringify({ message })   // Convert message into JSON format
        });
 
 
        // -------------------------------------------------
        // 📦 STEP 5: RECEIVE AND PROCESS RESPONSE
        // -------------------------------------------------
 
 
        // Wait for backend to send response, then convert it into a JS object
        const data = await res.json();
 
 
        // Display the AI's reply (sent by backend) in the output area
        // If for some reason reply is missing, show a fallback message
        output.textContent = data.reply || "No response from server";
 
 
      } catch (err) {
        // -------------------------------------------------
        // ⚠️ STEP 6: HANDLE ANY ERRORS
        // -------------------------------------------------
 
 
        // Log error details in browser console for debugging
        console.error(err);
 
 
        // Show user-friendly error message on webpage
        output.textContent = "⚠️ Error fetching API data";
      }
    });
