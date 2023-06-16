document.addEventListener('DOMContentLoaded', () => {
    const API_URL = "https://shrouded-waters-32984-0d9758ff8558.herokuapp.com"

    document.getElementById("historyButton").addEventListener("click", function() {
        window.location.href = "history.html";
    });

    document.getElementById("loadHistory").addEventListener("click", function() {
        fetch(API_URL + '/read/chat')
            .then((response) => {
                return (response.json())
            })
            .then((data) => {
                console.log(data);
                const historyDiv = document.getElementById("history");
                historyDiv.innerHTML = "";
                for (let i = 0; i < data.length; i++) {
                    const request = data[i].request;
                    const response = data[i].response;
                    const requestDiv = document.createElement("div");
                    const responseDiv = document.createElement("div");
                    requestDiv.innerHTML = "<strong>Request:</strong> " + request;
                    responseDiv.innerHTML = "<strong>Response:</strong> " + response;
                    historyDiv.appendChild(requestDiv);
                    historyDiv.appendChild(responseDiv);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    });
});