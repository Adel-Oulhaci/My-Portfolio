import React from "react";

function Projects() {
  const projects = [
    {
      name: "project 1",
      description: "decription",
      link: "#",
    },
    {
      name: "project 2",
      description: "decription",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl">
            <h3 className="text-2xl font-semibold text-indigo-600 mb-2">
              {project.name}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <a href={project.link} className="text-indigo-600 hover:underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
