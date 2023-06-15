// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     const mainContent = request.content;

//     //Make an API call to OpenAI
//     fetch('https://api.openai.com/v1/chat/completions', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + window.mykey,
//             // 'Authorization': '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',
//         },
//         body: JSON.stringify({
//             "model": "gpt-3.5-turbo",
//             "messages": [{"role": "user", "content": input}]
//         }),
//     })
//     .then(response => response.json())
//     .then(data => {
//         const message = data.choices[0].message.content;
//         sendResponse({message: message});
//     })
//     .catch((error) => {
//         console.error('Error:', error);
//         sendResponse({message: "An error occurred while processing your request"});
//     });
//     //keep the message channel open until the response is received
//     return true;
// });