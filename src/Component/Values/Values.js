import React from 'react';

const Values = () => {
  const values = [
    { icon: '🌱', title: 'DURABILITÉ' },
    { icon: '✔️', title: 'QUALITÉ' },
    { icon: '🔍', title: 'TRANSPARENCE' },
    { icon: '📢', title: 'TRANSMISSION' },
  ];

  return (
    <section className="text-center py-16">
      <h2 className="text-3xl font-bold mb-8">Les valeurs.</h2>
      <div className="flex justify-center space-x-4">
        {values.map((value, index) => (
          <div key={index} className="bg-green-100 rounded-lg p-6 w-1/5">
            <div className="text-4xl mb-4">{value.icon}</div>
            <h3 className="font-bold text-lg">{value.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
