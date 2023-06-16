document.addEventListener('DOMContentLoaded', () => {
    const API_URL = "https://shrouded-waters-32984-0d9758ff8558.herokuapp.com/"

    fetch(API_URL + 'read/chat')
        .then((response) => {
            return (response.json())
        })
        .then((data) => {
            console.log(data)
        })
    })




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
