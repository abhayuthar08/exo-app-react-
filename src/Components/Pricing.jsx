import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Our Pricing Plans</h2>
        <p className="text-zinc-400">Choose a plan that suits your needs</p>
      </div>

      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: 'Basic', price: '$0', features: ['1 User', 'Basic Support', 'Limited Access'] },
          { title: 'Pro', price: '$9/mo', features: ['5 Users', 'Priority Support', 'Full Access'] },
          { title: 'Enterprise', price: '$29/mo', features: ['Unlimited Users', '24/7 Support', 'All Features'] },
        ].map((plan, i) => (
          <div key={i} className="bg-zinc-800 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-2xl font-semibold mb-3">{plan.title}</h3>
            <p className="text-xl font-bold mb-4">{plan.price}</p>
            <ul className="space-y-2 text-zinc-400 mb-6">
              {plan.features.map((f, j) => (
                <li key={j}>• {f}</li>
              ))}
            </ul>
            <button className="bg-white text-zinc-900 font-semibold px-5 py-2 rounded hover:bg-zinc-300 transition">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
