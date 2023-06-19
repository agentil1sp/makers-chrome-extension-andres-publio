# 🧠 MAKERS Coding Challenge 2023
Andres Publio Gentile | 

### Chosen option: 4
#### A Chrome extension allowing users to prompt in ChatGPT without leaving the tab
This repository contains the different directories and files developed to carry out the challenge. The project has two parts.
- Part 1: the chrome extension that allows you to use chargpt on any page.
- Part 2: The api that allows you to save ChatGPT queries and answers and show the history | [API](https://github.com/agentil1sp/andres-publio.git)

## 📝 Required tasks
- ✅ Fetch data from an API.
    - [History](https://shrouded-waters-32984-0d9758ff8558.herokuapp.com/read/chat)
- ✅ Have a database.
    - Firebase
- ✅ Have an API to communicate with your database.
    - [API](https://github.com/agentil1sp/andres-publio.git)
- ✅ Have a simple UI and a way to interact with it.
    - [simple UI](https://github.com/agentil1sp/makers-chrome-extension-andres-publio/blob/main/images/simple%20UI.png)
- ✅ Deploy: put your code to work online so that other people can use it. 
- ✅ Record your Demo.
    - [Demo](https://www.loom.com/share/e2eb3f94f63b4aa2aa2fb3ad8c99bc76?sid=df01ea09-da89-4b62-88f1-37675aefcc92)

## 🔨 Built With
- JavaScript
- Node.js
    - Express
- Firebase
- Html
- Css
- Heroku

## 📂 Proyect Roadmap

**1.** Built the chrome extension with its interface.

**2.** Connected the chatgpt api to the chrome extension.

**3.** We built the api with the methods to display the hostorial and the method to store the questions and answers to chatGPT.

**4.** Integrated the api code into the chrome extension.

## 💻 How to use the chrome extension on your computer
- Make a git clone of this repository
- Go to [OpenIA](https://platform.openai.com/account/api-keys) enter the apikey section and generate an apikey.
- Go to the keys.js file and paste the apikey inside the quotes.
- Go to the chrome extensions page chrome://extensions and hit enable developer mode in the upper right corner.
- In the upper right corner click on load unpacked extension.
- Find the folder you got from the repository and select it.
- Click the extensions icon in the browser and pin the extension.
- Tap the extension and you are ready to use it.
- [Video of how to do the process](https://www.loom.com/share/dda69892dd9f4c57b6d2412035efa69f?sid=953d24cd-29f9-4575-822d-2bc044cef250)

## 🤖 Code improvements
- I would put the files in folders, for example popup files.
- I would create a login because currently when you hit the history button you see the history of all the people who have used the extension, although I like it the way it is because you give people the opportunity to see what questions other people ask.
- In the api I would create a structure of controllers and routas, maybe it is not necessary because it only has two functionalities but I would do it anyway.
- I would add more styles to the history window.
- I would have the history sorted by newest to oldest request.
- I would change the style and size of the extension interface.
- I would put a functionality for people to set the apikey from the extension interface.

## 🎥 Reference videos

[How to add Firebase Firestore to your chrome extension](https://www.youtube.com/watch?v=o_tM2ORppm8)

[Using ChatGPT to create... a ChatGPT Chrome Extension](https://www.youtube.com/watch?v=i1B_R4S7xnw)







