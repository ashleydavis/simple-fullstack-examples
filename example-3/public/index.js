
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
        const messageElement = document.getElementById("msg");
        const newTextElement = document.createTextNode(data.msg);
        messageElement.appendChild(newTextElement);
    });
