import React from 'react';

const FAQ = () => {
  return (
    <section className="py-16 bg-white-100 shadow-md">
      <div className="text-center">
        <h2 className="text-3xl mb-4">Des questions ?</h2>
        <a href="/faq" className="inline-block bg-gray-100 text-black py-2 px-4 rounded-full shadow text-lg font-medium transition-colors duration-300 hover:bg-green-600">
          J'accède à la FAQ
        </a>
      </div>
    </section>
  );
};

export default FAQ;
