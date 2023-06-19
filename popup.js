// Define una función llamada "sendRequest" que hace una solicitud a la API de OpenAI para obtener una respuesta de chat y actualiza la página del usuario con la respuesta. 
// La función se llama cuando el usuario hace clic en el botón "sendRequest" en la página.
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
            // Si la solicitud XMLHttpRequest ha finalizado (readyState=4) y la respuesta HTTP tiene un código de estado 200 (OK), analiza la respuesta JSON de la API de OpenAI y obtiene la respuesta de chat. Luego, actualiza la página del usuario con la respuesta de chat y envía la solicitud y la respuesta a la base de datos de la aplicación mediante una solicitud HTTP POST a la URL API_URL + "/chat" con los datos de entrada formateados en formato JSON
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

// Agrega un evento de click al botón con el id "sendRequest" que llama a la función "sendRequest" cuando se hace clic en el botón.
document.getElementById("sendRequest").addEventListener("click", function() {
    sendRequest();
}, false);



// Agrega un evento que escucha cuando el contenido de la página web se ha cargado completamente. Cuando se carga completamente, define la URL de la API y agrega un evento de click al botón con el id "historyButton". Cuando el usuario hace clic en el botón "historyButton", el código hace una solicitud HTTP GET a la URL API_URL + "/read/chat" para obtener el historial de la conversación almacenado en la base de datos de la aplicación. Cuando se recibe la respuesta JSON de la API, el código analiza los datos y crea un texto de historial formateado. Luego, crea una nueva ventana del navegador y muestra el historial de la conversación en la ventana utilizando el formato de texto preformateado.
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

  