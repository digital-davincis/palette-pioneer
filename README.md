<div align="center">
  <img alt="Palette Pioneer" src="https://github.com/sankalpsaini/hacked2024/assets/49659278/3f691644-89f0-4548-9eb9-10e1b749a1b7">
</div>

<h1 align="center"><a href="https://palette-pioneer.netlify.app">Palette Pioneer</a></h1>

<h3 align="center"> Created for HackED 2024 </h3>

<div align="center">
  <a href="https://palette-pioneer.netlify.app">
    <img alt="Check out our website" src="https://img.shields.io/badge/website-palette--pioneer.netlify.app-purple?style=flat&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgLTk2MCA5NjAgOTYwIiB3aWR0aD0iMjQiPjxwYXRoIGQ9Ik00NDAtMjgwSDI4MHEtODMgMC0xNDEuNS01OC41VDgwLTQ4MHEwLTgzIDU4LjUtMTQxLjVUMjgwLTY4MGgxNjB2ODBIMjgwcS01MCAwLTg1IDM1dC0zNSA4NXEwIDUwIDM1IDg1dDg1IDM1aDE2MHY4MFpNMzIwLTQ0MHYtODBoMzIwdjgwSDMyMFptMjAwIDE2MHYtODBoMTYwcTUwIDAgODUtMzV0MzUtODVxMC01MC0zNS04NXQtODUtMzVINTIwdi04MGgxNjBxODMgMCAxNDEuNSA1OC41VDg4MC00ODBxMCA4My01OC41IDE0MS41VDY4MC0yODBINTIwWiIgZmlsbD0iI2ZmZmZmZiIvPjwvc3ZnPg%3D%3D">
  </a>
  
  <a href="https://devpost.com/software/palette-pioneer">
    <img alt="Devpost" src="https://img.shields.io/badge/devpost-blue?logo=devpost&link=https%3A%2F%2Fdevpost.com%2Fsoftware%2Fpalette-pioneer">
  </a>

  <a href="https://app.netlify.com/sites/palette-pioneer/deploys">
    <img alt="Netlify Status" src="https://api.netlify.com/api/v1/badges/2d933016-8891-447c-8cff-86ed61842236/deploy-status">
  </a>

  <a href="https://hacked.compeclub.com/">
    <img alt="HackED Hackathon" src="https://img.shields.io/badge/HackED-2024-44bdb4">
  </a>
</div>

# Demo Video #

[![Palette Pioneer](https://img.youtube.com/vi/VsM11Efy_AM/0.jpg)](https://www.youtube.com/watch?v=VsM11Efy_AM)


# Inspiration and what it does
We have all been in a position where we have had to come up with a color palette for a school project, work, or even a hackathon! Our team wanted to make it easier for developers to generate either a completely random palette, base it off an existing hex color, or even generate one based on text input (ex. "Color Palette based on a sunset")! Based on the generated palette, Palette Pioneer allows the user to "hold" or "lock" specific colors that they like and re-generate the palette based on those new inputs.

# How we built it
We built this web application using React.js for the front and back end. To obtain the inputs from the user, we record the hex or text inputs and are then able to feed them into Machine Learning models. From this model, we obtain the generated hex colors (that match the text or hex input) and then we can display the completed palette! To handle the requests between the front and back end, we used express.js which works seamlessly with React.js. Many of the UI components that were used are from MaterialUI which were further customized to fit our purpose.

# Challenges we ran into
One of the main challenges that our team ran into during development was the connection from the front end to the back end. After much troubleshooting, we were able to find an alternative method where we used express.js to manage API calls within our application and transport/process data as needed.

# Accomplishments that we're proud of
We are extremely proud of our team's ability to learn new technologies quickly and efficiently to create the best product that we were able to, in such a short period. For many of us, this was the first project that we worked on together as a team. Due to this, we expected more leadership and difficulties with the separation of tasks. However, our team was able to adapt to many different situations, particularly dealing with frameworks and languages that were unfamiliar, to create a unique solution!

# What we learned
Sankalp: Throughout this hackathon, I learned how to divide tasks among a new team and I learned how to properly create a single-page web application in React.js which can behave as a multi-page application through interactive scrolling. 

Ash: I learned how to adapt with my team members and work with languages and frameworks that were brand new to me to help make an awesome web app. 

Mark: Not only did I learn new tools that are often used in web development (express.js, material UI) but this experience also helped show me how to collaborate with a team in a fast-paced environment. 

Sumaiya: I learned how to structure and debug a web application for dynamic, user-driven interactions by integrating state management and asynchronous server requests across multiple React components. 

Mostafa: I learned how the front end integrates with the back end in web development and how to utilize JavaScript for backend tasks.

# What's next for Palette Pioneer
We are hoping to add a browser extension for Palette Pioneer in which users will be able to generate complimentary colors on the fly while developing. In addition to this, users will also be able to register an account through which they can share their palettes with their team and view previously generated palettes.
