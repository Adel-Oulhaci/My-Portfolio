import React from "react";

function Skills() {
  const skills = ["React", "Python", "Flutter", "Tailwind CSS", "JavaScript", "Firebase"];

  return (
    <section id="skills" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-indigo-600 mb-8">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg shadow-md">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
