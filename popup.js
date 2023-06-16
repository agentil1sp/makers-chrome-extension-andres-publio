function sendRequest() {
    console.log("hi");
    var input = document.getElementById("request").value;
    const API_URL = "https://shrouded-waters-32984-0d9758ff8558.herokuapp.com"



        //Make API request to OpenAI
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://api.openai.com/v1/chat/completions", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader("Authorization", 'Bearer ' + window.mykey);
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                var output = response.choices[0].message.content;
                document.getElementById("response").innerHTML += "<p><strong>Response:</strong> " + output + "</p>";
                fetch( API_URL + "/chat", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        'request': input,
                        'response': output
                    })
                })
                .then(response => {
                    console.log("Se guardo todo en la base de datos");
                })
                .catch(error => {
                    console.error("Error:", error);
         });
            }
        };
        var data = JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [{"role": "user", "content": input}]
        });
        xhr.send(data);
        }

document.getElementById("sendRequest").addEventListener("click", function() {
    sendRequest();
}, false);




document.addEventListener('DOMContentLoaded', () => {
    const API_URL = "https://shrouded-waters-32984-0d9758ff8558.herokuapp.com"
  
    document.getElementById("historyButton").addEventListener("click", function() {
      fetch(API_URL + '/read/chat')
        .then((response) => response.json())
        .then((data) => {
          let historyText = "";
          for (let i = 0; i < data.length; i++) {
            const request = data[i].item.request;
            const response = data[i].item.response;
            historyText += "Request: " + request + "\n";
            historyText += "Response: " + (response || "No response") + "\n\n";
          }
          const historyWindow = window.open("", "historyWindow", "width=600,height=800");
          historyWindow.document.write("<pre>" + historyText + "</pre>");
          historyWindow.document.close();
        })
        .catch((error) => console.log(error));
    });
  });

  