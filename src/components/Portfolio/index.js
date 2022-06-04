import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  const [projects] = useState([
    {
      name: 'dread-it',
      description: 'MERN Stack',
      link: "https://rocky-falls-31812.herokuapp.com/",
      repo: "https://github.com/descardi-b/dreadit"
    },
    {
      name: 'tech-blog',
      description: 'HTML/CSS/Javascript/MySql/Sequelize',
      link: "https://sheltered-springs-67332.herokuapp.com/",
      repo: "https://github.com/aaronhleung/hw14-tech-blog"
    },
    {
      name: 'ourspace',
      description: 'Node/Express.js/MySql',
      link: "https://github.com/WinnieCWu/OurSpace/",
      repo: "https://obscure-citadel-61027.herokuapp.com/"
    },
    {
      name: 'note-taker',
      description: 'HTML/CSS/JS/Node/Express.js',
      link: "https://guarded-spire-34031.herokuapp.com/",
      repo: "https://github.com/aaronhleung/hw11-note-taker"
    },
    {
      name: 'budget-tracker',
      description: 'Node.js/Express.js/mongoDB',
      link: "https://github.com",
      repo: "https://github.com/aaronhleung/hw19-budget-tracker"
    },
    {
      name: 'e-commerce',
      description: 'React/JavaScript/CSS',
      link: "https://github.com",
      repo: "https://github.com/aaronhleung/hw13-ecommerce-back-end"
    },
    {
      name: 'coding-quiz',
      description: 'HTML/CSS/JavaScript',
      link: "https://aaronhleung.github.io/hw4-coding-quiz/",
      repo: "https://github.com/aaronhleung/hw4-coding-quiz"
    },
    {
      name: 'inspo',
      description: 'HTML/CSS/JavaScript',
      link: "https://aaronhleung.github.io/inspo/",
      repo: "https://github.com/aaronhleung/inspo/"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
