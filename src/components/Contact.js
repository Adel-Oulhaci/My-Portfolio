import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-600 text-white text-center">
      <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
      <p className="mb-4">
        Feel free to reach out to me via email or through social media platforms.
      </p>
      <a
        href="mailto:your-email@example.com"
        className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-200"
      >
        Send Email
      </a>
    </section>
  );
}

export default Contact;
