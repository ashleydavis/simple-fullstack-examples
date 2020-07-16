
function onButtonClick() {
    alert("That was an awesome button click! Please do it again :)");
}

// Load data from the backend using a REST API.
fetch("/my-rest-api")
    .then(response => {
        // Log the response so we can see it in the browser console.
        console.log("Retreived response:");
        console.log(response);

        // Extract JSON data from the response body.
        return response.json();
    })
    .then(data => {
        // Render the message from the response in the browser window.
        const messageElement = document.getElementById("msgs");

        // Loop through all data records and the text to the DOM.
        for (const record of data) {
            const newTextElement = document.createTextNode(record.msg);
            const newDivElement = document.createElement("div");
            newDivElement.appendChild(newTextElement);
            messageElement.appendChild(newDivElement);
        }
    });
