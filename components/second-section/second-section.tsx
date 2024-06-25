"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    title: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    title: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    title: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    title: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    title: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    title: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

export default function SecondSection() {
  return (
    <section className="container pb-10">
      <div className="md:flex-row flex-col items-center flex justify-center gap-x-12 py-10">
        <div className="p-5 justify-center md:w-1/3">
          <div className="bg-gradient-to-r from-blue-800 to-green-300 bg-clip-text text-transparent text-5xl  font-bold pb-10">
            From Startup to Enterprise, Bird is built for every type of
            business.
          </div>
          <div className="text-lg mb-8">
            Built for all businesses and communities. Bird is the only platform
            you need to grow your business.
          </div>
          <button className="bg-blue-500 text-white p-4 flex justify-center md:w-1/3 rounded-lg hover:bg-blue-600">
            Get Started
          </button>
        </div>
        <video className="rounded-xl md:w-2/3 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/4872897-hd_1920_1080_25fps.mp4" />
        </video>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="text-3xl flex justify-center md:text-5xl font-bold pt-10 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
          Product Features
        </div>
        <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"
            >
              <Image
                alt={feature.alt}
                src={feature.image}
                width={300}
                height={300}
                className="object-contain h-20 w-20 items-center justify-center flex mb-8"
              />
              <div className="text-2xl font-bold pb-4 bg-gradient-to-t from-black to-gray-400 bg-clip-text text-transparent ">
                {feature.title}
              </div>
              <div className="text-lg bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
