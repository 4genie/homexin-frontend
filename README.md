# homexin-frontend-project Demo <!-- omit in toc -->

<p>
 <a href="#" target="_blank">
    <img alt="Wireframe" src="https://img.shields.io/badge/Mockup-Yes-yellow" />
  </a>
</p>

Homexin APP is a platform that make you find Certified Nursing Assistances easier and faster!

![](https://i.imgur.com/YRwdnx2.jpg)

## Built With

- [React Hooks](https://reactjs.org/)
- [React Router](https://reactrouter.com/)
- [styled-components](https://styled-components.com/docs/basics)
- [react-mobile-datepicker](https://github.com/lanjingling0510/react-mobile-datepicker#readme)
- [prettier](https://prettier.io/)
- [ESLint](https://eslint.org/docs/user-guide/configuring/)
- [Netlify](https://docs.netlify.com/?_ga=2.190209259.1714598831.1634974332-1934839556.1633767074)
- [Figma](https://www.figma.com/)

## Demo

![](https://i.imgur.com/8IgBpAW.png)

In this [Homexin APP Demo](https://homexin-frontend.netlify.app/), beside the home page, you can also link to the member page which showing user's profile, user can edit their profile and infomation.

**Home page**

- go to member page
  <img src="https://i.imgur.com/TuiAzF0.gif" width="200">
- if page closed
  <img src="https://i.imgur.com/aXWgZFQ.gif" width="200">
- copy user's recommended code
  <img src="https://i.imgur.com/IinVYKO.gif" width="200">

**Member Page**

- edit member profile
  <img src="https://i.imgur.com/MoSMeiq.gif " width="200">

## Getting Started

1. Clone the repo to local envirment
   ```
   https://github.com/4genie/homexin-frontend.git
   ```
2. Install NPM packages
   ```
   npm install
   ```
3. Runs the app

   ```
   npm start
   ```

   Now, you are in the development mode.
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

4. Deployment
   ```
    npm run build
   ```
   Builds the app for production to the `build` folder.
   See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Directory

```
📦src
 ┣ 📂components
 ┃ ┣ 📂popup
 ┃ ┃ ┣ 📜Backdrop.js
 ┃ ┃ ┣ 📜FunctionPopup.js
 ┃ ┃ ┗ 📜Popup.js
 ┃ ┣ 📜table.js
 ┃ ┗ 📜textField.js
 ┣ 📂constants
 ┃ ┗ 📜cities.js
 ┣ 📂hooks
 ┃ ┣ 📜useEditMember.js
 ┃ ┗ 📜useHome.js
 ┣ 📂images
 ┃ ┣ 📜001-trophy 1.svg
 ┃ ┣ 📜003-money-bag 1.svg
 ┃ ┣ 📜004-cv 1.svg
 ┃ ┣ 📜004-cv 2.png
 ┃ ┗ 📜userAvatar.png
 ┣ 📂pages
 ┃ ┣ 📂EditMemberPage
 ┃ ┃ ┣ 📜DatePicker.css
 ┃ ┃ ┣ 📜EditMemberPage.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜style.js
 ┃ ┣ 📂HomePage
 ┃ ┃ ┣ 📜HomePage.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜style.js
 ┃ ┗ 📂MemberPage
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜MemberPage.js
 ┃ ┃ ┗ 📜style.js
 ┣ 📂styles
 ┃ ┣ 📜breakpoints.js
 ┃ ┣ 📜globalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┗ 📜userDataApi.js
```

## Contributor

<a href="https://github.com/4genie/homexin-frontend/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=4genie/homexin-frontend" width="30px"/>
</a>

[Homexin Company engineer - E.D.](https://github.com/poppin-mice)

1. Providing the mockup design and requirement.

[Fron-end developer - Genie](https://github.com/4genie)

1. Building Home Page, Member Page, and Edit Member Page layout and function.
2. Building each pages' router.
3. Deploying demo project on Netlify.
