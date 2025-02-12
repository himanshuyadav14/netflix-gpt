# Netflix GPT

Movies recomandation with AI.

## Setup

- Install react app using create-react-app (CRA)

```js
npx create-react-app netflix-gpt
```

- Create `.env` file and put configure

```js
REACT_APP_BASE_URL = YOUR_APPLICATION_BASE_URL;
REACT_APP_FIREBASE_KEY = YOUR_FIREBASE_KEY_WILL_HERE;
REACT_APP_FIREBASE_APP_ID = YOUR_FIREBASE_APP_ID_WILL_HERE;
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_HERE;
```

- Install and init tailwind css

```js
npm install -D tailwindcss
npx tailwindcss init
```

- Configure tailwind css in your project

  `npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory.
  Open `tailwind.config.js` and replace all content with below code.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

```js
npm start
```

## Features

- Home Page (is user !authorised)

  - Signin/Signup Page
    - SignInForm / SignUpForm

- Browse Page

  - Navbar
  - Showcase
  - Trendings
  - MoviesSuggestion
    - MoviesList \* N

- NetflixGPT
  - Search
  - MoviesSuggestion

## Screen Shot

Live Demo : [Live Demo](https://netflixgptai.vercel.app/ "Live Demo")

## Screen Shot

- Landing Page

  ![Landing Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/01-Landing.png)

- Signin Page

  ![Signin Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/02-Signin.png)

- Signup Page

  ![Signup Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/03-Signup.png)

- Browse Page

  ![Browse Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/04-Browse.png)

- Movie List

  ![Movie List](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/05-Movie-List.png)

- Shimmer Loading

  ![Shimmer Loading](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/06-Shimmer-loading.png)

- Search Page

  ![Search Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/07-Search.png)

- Watch Now Page

  ![Watch Now Page](https://raw.githubusercontent.com/himanshuyadav14/netflix-gpt/refs/heads/master/public/screenshot/08-Watch.png)

## 💖 Support This Project  

Thank you for exploring **NetflixGPT**! This project was built with passion using **React.js**, **Tailwind CSS**, and **AI-powered recommendations** to deliver an intuitive and dynamic movie-browsing experience.  

Your support and feedback are invaluable!  
- ⭐ Star this repo if you found it useful!  
- 🛠️ Feel free to contribute by opening issues or pull requests.  
- 🤝 Connect with me on **[LinkedIn](https://linkedin.com/in/himanshuyadav14)**.  

Made with ❤️ and React.  
Happy Coding! 🚀 
## 🙏 Thank You 🙏
