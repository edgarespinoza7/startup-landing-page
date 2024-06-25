import React from "react";

export default function Cta() {
  return (
    <section className="container mb-10">
      <div className="border-[1px] mx-auto p-20 rounded-xl bg-zinc-100 flex flex-col items-center justify-center">
        <div className="text-4xl font-bold mb-2 text-center">
          Start building your online store today.
        </div>
        <div className="py-6 text-center w-2/3 text-lg text-gray-600">
        Curious about how NextG can help your business? Get in touch with our team to learn more about our platform and how we can help you grow your business.
        </div>
        <button className="bg-blue-500 px-6 py-4 text-white rounded-xl md:w-1/4 mt-2 hover:bg-blue-800 transform transition-all">Contact Sales</button>
      </div>
    </section>
  );
}
