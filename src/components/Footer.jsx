import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-1/text-gray-600 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            unde accusantium culpa assumenda dolor harum. Perspiciatis
            voluptatum porro, iure mollitia maxime modi deserunt.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium md-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium md-5 "> GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+12-2312-21312</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ forever.com -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
