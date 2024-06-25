export default function Hero() {
  return (
    <section className="container py-20">
      <div className="mx-auto text-center flex flex-col items-center justify-center">
        <div className="md:text-7xl text-5xl font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent w-4/5">
          Build a Brand and Start Selling in Seconds
        </div>
        <p className="text-lg md:text-xl mb-10 text-gray-500">
          No matter what you sell, NextG software has everything you need to run
          your online store.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 text-white font-semibold px-10 py-4 rounded-xl hover:bg-blue-700">
            Get Started
          </button>
          <button className="border-2 border-zinc-400 text-zinc-700 font-semibold hover:bg-zinc-100 px-10 py-4 rounded-xl">
            Learn More
          </button>
        </div>
        <div className="pt-10">
          <video className="rounded-xl" autoPlay muted loop>
            <source
              src="/content/4872896-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
