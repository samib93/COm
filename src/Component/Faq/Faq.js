import React from 'react';

const FAQ = () => {
  return (
    <section className="py-16 bg-blue-500 shadow-md">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Des questions ?</h2>
        <a href="/faq" className="inline-block bg-light-500 text-black py-2 px-4 rounded-full text-lg font-medium transition-colors duration-300 hover:bg-green-600">
          J'accède à la FAQ
        </a>
      </div>
    </section>
  );
};

export default FAQ;
