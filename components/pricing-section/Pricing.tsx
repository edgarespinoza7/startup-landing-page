const plans = [
  {
    name: "Basic",
    price: 40,
    fee: 3.7,
    description:
      "Start selling online with a simple and easy to use platform. Create your first store in minutes.",
  },
  {
    name: "Standard",
    price: 80,
    fee: 2.9,
    description:
      "Level up your business with a powerful eCommerce platform. Get access to all the features you need to grow.",
  },
  {
    name: "Premium",
    price: 200,
    fee: 2.4,
    description:
      "For businesses that need more. Get access to all the features you need to grow.",
  },
];

export default function Pricing() {
  return (
    <section className="container flex flex-col items-center my-6">
      <div className="text-4xl md:text-6xl text-center font-bold bg-gradient-to-r from-blue-800 to-purple-400 bg-clip-text text-transparent py-10">
        Pricing
      </div>
      <div className="text-2xl text-center text-gray-600 pb-10">
        Simple and transparent pricing plans for all businesses.
      </div>
      <div className="flex gap-6 flex-col md:flex-row py-4">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="border flex flex-col items-center justify-center px-4 py-8 rounded-lg gap-6 shadow"
          >
            <div className="text-2xl text-gray-500 font-bold">{plan.name}</div>
            <div className="text-4xl text-gray-800 font-semibold">{`$${plan.price}/month`}</div>
            <div className="text-lg text-gray-500">{`${plan.fee}% + 30¢ per transaction`}</div>
            <div className="text-center text-lg text-gray-700">{plan.description}</div>
            <button className="bg-blue-500 rounded-xl text-white py-4 px-10 hover:bg-blue-800 transform transition-all">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
