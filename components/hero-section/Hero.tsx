export default function Hero() {
  return (
    <section className="md:py-20 py-10 bg-gradient-to-r from-gray-00 to-gray-200 space-y-10 container ">
      <div className="mx-auto text-center">
        <div className="text-6xl flex justify-center font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent ">
          Build a Brand and Start Selling in Seconds
        </div>
        <p className="text-lg md:text-xl mb-10 bg-gradient-to-r from-black to-gray-300 bg-clip-text text-transparent font-bold">
          No matter what you sell, Bird software has everything you need to run
          your online store.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold">
            Get Started
          </button>
          <button className="bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold">
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
