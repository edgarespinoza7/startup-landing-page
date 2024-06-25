import Image from "next/image";

export default function ThirdSection() {
  return (
    <section className="flex flex-col md:flex-row container mt-12">
      <div className="flex-col flex md:flex-row gap-6 ">
        <div className="md:w-2/3 w-full">
          <video
            src="/content/6613675-hd_1920_1080_25fps.mp4"
            autoPlay
            muted
            loop
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col border p-4 rounded-xl md:w-1/2">
          <div className="text-4xl flex justify-center bg-gradient-to-l from-blue-500 to-purple-800 bg-clip-text text-transparent font-bold p-6">
            Fully Customizable Ecommerce
          </div>
          <div className="md:px-6 space-y-4 flex flex-col items-start justify-center">
            <div className="text-lg pt-6 flex gap-4 md:max-w-[400px]">
              <Image
                alt="icon"
                src="/images/icon-store.png"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2 text-gray-500">
                Choose from a variety of store templates to get started. ANd
                customize your store to fit your brand.
              </div>
            </div>

            <div className="text-lg pt-4 flex gap-4 md:max-w-[400px]">
              <Image
                alt="icon"
                src="/images/icon-product.png"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2 text-gray-500">
                Add unlimited product and variations. And manage your inventory with ease. 
              </div>
            </div>

            <div className="text-lg pt-4 flex gap-4 md:max-w-[400px]">
              <Image
                alt="icon"
                src="/images/icon-analytics.png"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2 text-gray-500">
                Gain valuable insights into your customers and products with our analytics tools.
              </div>
            </div>

            <div className="text-lg pt-4 flex gap-4 md:max-w-[400px]">
              <Image
                alt="icon"
                src="/images/icon-shield.png"
                width={70}
                height={70}
              />
              <div className="flex flex-col gap-2 text-gray-500">
                Best in class security to protect your data and your customers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
