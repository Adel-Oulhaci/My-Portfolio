import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaPhone, FaLinkedin, FaMoon, FaSun } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import todo from './assets/todo.png'
import detection from './assets/detection.png'
import ecom from './assets/ecom.png'
import portfolio from './assets/portfolio.png'
import bk from './assets/bk.png'

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const form = useRef();
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_119lwgl', 'template_850j4re', form.current, {
        publicKey: 'grQLPKCNkcGrU-0X_',
      })
      .then(
        () => {
          setMessage('Email sent successfully!'); 
          form.current.reset(); 
        },
        (error) => {c
          setMessage('Failed to send email: ' + error.text);
        },
      );
  };

  const projects = [
    {
      name: "Todo App",
      description: "A simple and intuitive to-do list application to manage daily tasks efficiently.",
      image: todo,
      github: "https://github.com/Adel-Oulhaci/Todo-app",
      preview: "https://my-pub-react-todo-app.netlify.app",
      tags: ["React", "Node.js", "TailwindCSS"]
    },
    {
      name: "OpenCV Detection Project",
      description: "A project utilizing OpenCV for various detection tasks, demonstrating image processing and computer vision techniques.",
      image: detection,
      github: "https://github.com/Adel-Oulhaci/OpenCV-Detection-Project",
      preview: "https://open-cv-detection-app.netlify.app",
      tags: ["Python", "OpenCV", "Computer Vision"]
    },
    {
      name: "E-Commerce App",
      description: "An online shopping platform offering a seamless user experience for browsing and purchasing products.",
      image: ecom,
      github: "https://github.com/Adel-Oulhaci/E-Commerce-Website",
      preview: "https://my-e-com-website.netlify.app",
      tags: ["React", "Node.js", "TailwindCSS"]
    },
    {
      name: "My Portfolio",
      description: "A personal portfolio showcasing my web development skills, including various projects built with modern technologies.",
      image: portfolio,
      github: "https://github.com/Adel-Oulhaci/My-Portfolio",
      preview: "https://adel-oulhaci.netlify.app",
      tags: ["React", "Node.js", "TailwindCSS"]
    },
    {
      name: "Badrat Khayr Club",
      description: "Badrat Khayr Club is a website for our university club, showcasing its activities, events, and achievements.",
      image: portfolio,
      github: "https://github.com/Adel-Oulhaci/bk",
      preview: "https://badratkhayr.netlify.app",
      tags: ["React", "Node.js", "TailwindCSS"]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
      {/* Theme Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
      >
        {darkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
      </motion.button>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover opacity-50"
            poster="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-technology-lines-background-27963-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center space-y-8"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-32 h-32 mx-auto mb-8"
            >
              <img
                src={`https://github.com/Adel-Oulhaci.png`}
                alt="Profile"
                className="w-full h-full rounded-full border-4 border-blue-500 shadow-lg"
              />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Adel Fakhr El Islem OULHACI
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Passionate student and developer skilled in React.js, Python, Flutter, and Tailwind CSS
            </motion.p>

            <motion.div
              className="flex justify-center space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="https://github.com/Adel-Oulhaci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/adel-fakhr-el-islem-oulhaci"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                <FaLinkedin className="text-3xl" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="#about"
                className="inline-block py-3 px-8 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300"
              >
                Explore My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 dark:text-white mb-16"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-sm" />
                      <span>Preview</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-800 dark:bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors duration-300"
                    >
                      <FaGithub className="text-sm" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional applications.
              When I'm not coding, you can find me exploring photography, gaming, watching anime,
              or learning new languages. I believe in continuous learning and pushing the boundaries
              of what's possible with technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Let's Connect</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Have a project in mind? Let's talk about it.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <motion.a
                    href="mailto:lelliam.weda@gmail.com"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="p-3 bg-white dark:bg-gray-700 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors">
                      <FaEnvelope className="text-xl" />
                    </span>
                    <span>lelliam.weda@gmail.com</span>
                  </motion.a>
                  <motion.a
                    href="tel:+213673768571"
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-4 text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
                  >
                    <span className="p-3 bg-white dark:bg-gray-700 rounded-full group-hover:bg-blue-50 dark:group-hover:bg-blue-900/50 transition-colors">
                      <FaPhone className="text-xl" />
                    </span>
                    <span>+213673768571</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="user_email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Send Message
                </motion.button>
                {message && <div className={`mt-2 text-sm ${message.includes('successfully') ? 'text-green-600' : 'text-red-600'}`}>{message}</div>}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;