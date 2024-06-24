"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    name: "Customizable",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-cloud.png",
    alt: "Customizable",
    color: "blue",
  },
  {
    name: "Fast ",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-fast.png",
    alt: "Customizable",
  },
  {
    name: "Integrations",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-journey.png",
    alt: "Customizable",
  },
  {
    name: "Full Stack",
    description:
      "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
    image: "/images/icon-layer.png",
    alt: "Customizable",
  },
  {
    name: "Loyalty",
    description:
      "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
    image: "/images/icon-location.png",
    alt: "Customizable",
  },
  {
    name: "Support",
    image: "/images/icon-support-1.png",
    description:
      "Get 24/7 support from our team to help you with any issues you have.",
    alt: "Customizable",
  },
];

export default function SecondSection() {
  return (
    <div>
      <div className="md:flex-row flex-col items-center flex justify-center gap-x-12 pb-10">
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
        <video className="rounded-xl md:w-2/5 p-4 md:p-0" autoPlay muted loop>
          <source src="/content/4872897-hd_1920_1080_25fps.mp4" />
        </video>
      </div>
      <div className="flex-col items-center justify-center">
        <div className="text-3xl flex justify-center md:text-5xl font-bold pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
          Product Features
        </div>
      </div>
    </div>
  );
}
