export default function FourthSection() {
  return (
    <section className="flex flex-col items-center justify-center md:py-10 container">
      <div className="text-center md:text-6xl text-4xl font-bold bg-gradient-to-r from-purple-800 to-pink-500 bg-clip-text text-transparent py-6 max-w-[1000px]">
        Content Management System. Made Simple.
      </div>
      <div className="flex justify-center items-center pt-10">
        <video
          src="/content/man-writing.mp4"
          className="rounded-xl md:w-4/5"
          autoPlay
          muted
          loop
        ></video>
      </div>
    </section>
  );
}
