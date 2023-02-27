(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{10:function(e,t,a){},22:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(16),i=a.n(c),n=a(15),r=a(8),o=(a(22),a(0));var l=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],i=Object(s.useState)(!0),l=Object(n.a)(i,2),j=l[0],b=l[1],d=function(){return c(!1)},h=function(){window.innerWidth<=960?b(!1):b(!0)};return Object(s.useEffect)((function(){h()}),[]),window.addEventListener("resize",h),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsxs)("div",{className:"navbar-container",children:[Object(o.jsx)(r.b,{to:"/react-jen-portfolio/",href:"#home",className:"navbar-logo",onClick:d}),Object(o.jsx)("div",{className:"menu-icon",onClick:function(){return c(!a)},children:Object(o.jsx)("i",{className:a?"fas fa-times":"fas fa-bars"})})]}),Object(o.jsxs)("ul",{className:a?"nav-menu active":"nav-menu",children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#home",className:"nav-links",onClick:d,children:"Home"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#projects",className:"nav-links",onClick:d,children:"Projects"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#about",className:"nav-links",onClick:d,children:"About"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{href:"#contact",className:"nav-links",onClick:d,children:"Contact"})})]}),j]})})},j=a(2),b=(a(10),a(32),["btn--primary","btn--outline"]),d=["btn--medium","btn--large"],h=function(e){var t=e.children,a=e.type,s=e.onClick,c=e.buttonStyle,i=e.buttonSize,n=b.includes(c)?c:b[0],r=d.includes(i)?i:d[0];return Object(o.jsx)("a",{href:"#contact",className:"btn-mobile",children:Object(o.jsx)("button",{className:"btn ".concat(n," ").concat(r),onClick:s,type:a,children:t})})};a(33);var p=function(){return Object(o.jsxs)("div",{id:"home",className:"hero-container",children:[Object(o.jsx)("h1",{children:"JENNIFER BATES"}),Object(o.jsx)("p",{children:"Software Engineer & Project Manager"}),Object(o.jsx)("a",{href:"#projects",className:"hero-btns",children:Object(o.jsx)(h,{className:"btns",buttonStyle:"btn--outline",buttonSize:"btn--large",children:"CONTACT ME"})})]})};var m=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("li",{className:"cards__item",children:Object(o.jsxs)("div",{className:"cardItemWrapper",children:[Object(o.jsx)("figure",{className:"cards__item__pic-wrap","data-category":e.label,children:Object(o.jsx)("img",{src:e.src,alt:"project",className:"cards__item__img"})}),Object(o.jsxs)("div",{className:"cards__item__info",children:[Object(o.jsx)("h5",{className:"cards__item__text",children:e.text}),Object(o.jsx)("p",{}),Object(o.jsx)("a",{className:"github",href:e.url,target:"_blank",rel:"noreferrer",children:"GitHub"}),Object(o.jsx)("a",{className:"app",href:e.appURL,target:"_blank",rel:"noreferrer",children:" Live App"})]})]})})})},u=(a(34),a.p+"static/media/fitness.b33ae72d.png"),x=a.p+"static/media/codeqz.f38b8e66.png",f=a.p+"static/media/books.eb22a4d4.png",g=a.p+"static/media/evolvejournal.051cd326.png",O=a.p+"static/media/pickyeaterapp.df4b3e24.png",v=a.p+"static/media/traveltracker.a6dc7331.png",k=a.p+"static/media/jen.9c02945c.jpeg";var N=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"about",className:"intro",children:[Object(o.jsx)("h1",{className:"summary__head",children:"HELLO!"}),Object(o.jsx)("img",{className:"jen",alt:"self",src:k}),Object(o.jsx)("p",{className:"summary__intro",children:"I'm Jen. Thank you for visiting my portfolio. I am a software engineer and technical project manager with a passion for creating beautiful interfaces. I am also a self-proclaimed nerd. I have always enjoyed working in technology for its dynamic, ever-evolving landscape. "}),Object(o.jsx)("p",{className:"summary__intro",children:" In both roles, I completed many complex projects collaborating with telematics, backend, UX design, and product management teams in dynamic, fast-paced startup environments to build proprietary HMI components and cloud platforms for everything from electric vehicles, to industrial machines, to GUIs for remote monitoring devices."}),Object(o.jsx)("p",{className:"summary__intro",children:"I am energized by environments in which I can combine creativity and problem solving! When I'm not coding, I love to go sailing and scuba dive in the Caribbean."})]}),Object(o.jsxs)("div",{id:"projects",className:"cards",children:[Object(o.jsx)("h1",{children:"PROJECTS"}),Object(o.jsxs)("p",{className:"projects__intro",children:["Six projects I enjoyed working on are highlighted below. Select ",Object(o.jsx)("b",{children:"'GitHub'"})," for the project repository and the code behind the app. Select ",Object(o.jsx)("b",{children:"'Live App'"})," to view the deployed project! Visit my full GitHub repository at: ",Object(o.jsx)("a",{className:"onomatopoetica",href:"https://github.com/onomatopoetica",target:"_blank",rel:"noreferrer",children:"Onomatopoetica"}),". ",Object(o.jsx)("b",{children:"Please note: Apps deployed on Heroku take a little longer to load."})," "]}),Object(o.jsx)("div",{className:"cards__container",children:Object(o.jsxs)("div",{className:"cards__wrapper",children:[Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(m,{img:!0,src:g,text:"A progressive web app! This group project fitness journal uses a Node + Express server with a mySQL database + a Sequelize ORM and an MVC design paradigm. This application is deployed on Heroku.",label:"Evolve Fitness Journal",url:"https://github.com/onomatopoetica/evolve",appURL:"https://evolve-journal.herokuapp.com/"}),Object(o.jsx)(m,{img:!0,src:x,text:"Students have 75 seconds to take a JavaScript quiz testing their knowledge of the fundamentals. The app stores high scores enabling students to gauge their progress. This app is deployed on GitHub.",label:"JavaScript Code Quiz",url:"https://github.com/onomatopoetica/code-quiz",appURL:"https://onomatopoetica.github.io/code-quiz/"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(m,{img:!0,src:f,text:"A books search application with React, Node, Express and MongoDB utilizing the Google Books API. The user can search for a book to render a list of books relevant to the search word. The user can save their favorite book titles. Deployed on Heroku.",label:"React Google Books Search",url:"https://github.com/onomatopoetica/react-google-books-search",appURL:"https://react-googlebooks-search-app.herokuapp.com/"}),Object(o.jsx)(m,{img:!0,src:O,text:"A group project using jQuery + Spoonacular API creates a resource for people with food sensitivities. The user can search by specific dietary requirements to view a recipe, ingredients, instructions + view more information about the recipe.",label:"Picky Eater Recipe App",url:"https://github.com/jkriese12/picky-eater",appURL:"https://jkriese12.github.io/picky-eater/"})]}),Object(o.jsxs)("ul",{className:"cards__items",children:[Object(o.jsx)(m,{img:!0,src:u,text:"A fitness tracker incorporates a Mongo database and Mongoose schema routing with Express. The app uses MongoDB Atlas cloud database to store user data. Deployed on Heroku.",label:"Fitness Tracker",url:"https://github.com/onomatopoetica/workout-tracker",appURL:"https://immense-inlet-26212.herokuapp.com/"}),Object(o.jsx)(m,{img:!0,src:v,text:"A responsive budget tracker progressive web app (PWA) with offline functionality. Deposits and expenses are stored in a MongoDB Atlas cloud database. The app is deployed on Heroku.",label:"Travel Budget",url:"https://github.com/onomatopoetica/budget-tracker",appURL:"https://agile-river-83351.herokuapp.com/"})]})]})})]})]})};a(35);var _=function(){return Object(o.jsxs)("div",{className:"footer-container",children:[Object(o.jsx)("section",{id:"contact",children:Object(o.jsx)("div",{className:"footer-links",children:Object(o.jsx)("div",{className:"footer-link-wrapper",children:Object(o.jsx)("div",{className:"footer-link-items",children:Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"btn--medium",onClick:function(){return window.location="mailto:jendotb@gmail.com"},children:"EMAIL ME!"})})})})})}),Object(o.jsx)("section",{className:"social-media",children:Object(o.jsxs)("div",{className:"social-media-wrap",children:[Object(o.jsxs)("div",{className:"social-icons",children:[Object(o.jsx)("a",{className:"social-icon-link github",href:"https://github.com/onomatopoetica",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:Object(o.jsx)("i",{className:"fab fa-github"})}),Object(o.jsx)("a",{className:"social-icon-link linkedin",href:"https://www.linkedin.com/in/jenbates/",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",children:Object(o.jsx)("i",{className:"fab fa-linkedin"})}),Object(o.jsx)("a",{className:"social-icon-link unsplash",href:"https://unsplash.com/@jendotb",target:"_blank",rel:"noreferrer","aria-label":"UnSplash",children:Object(o.jsx)("i",{className:"fab fa-unsplash"})})]}),Object(o.jsx)("div",{className:"footer-logo",children:Object(o.jsxs)("h4",{className:"website-rights",children:["Made with ",Object(o.jsx)("i",{className:"fas fa-heart"}),"  ",Object(o.jsx)("a",{href:"https://github.com/onomatopoetica",target:"_blank",rel:"noreferrer","aria-label":"GitHub",children:"Onomatopoetica "})," \xa9 2021"]})})]})})]})};var y=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(p,{}),Object(o.jsx)(N,{}),Object(o.jsx)(_,{})]})};function w(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("h1",{className:"about",children:"About"})})}function I(){var e=Object(j.f)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var S=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(I,{}),Object(o.jsx)(l,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{path:"/",exact:!0,component:y}),Object(o.jsx)(j.a,{path:"/react-jen-portfolio",exact:!0,component:y}),Object(o.jsx)(j.a,{path:"/react-jen-portfolio/about",exact:!0,component:w})]})]})})};i.a.render(Object(o.jsx)(S,{}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.5755d4b8.chunk.js.map