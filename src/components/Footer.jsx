import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Main Div */}
      <div className="mt-[180px] md:mt-[80px] lg:mt-[30px] pt-[20px] bg-black text-white relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
        {/* 1st div */}
        <div className="p-[50px]">
          <h1 className="font-bold">Exlusive</h1>
          <h1 className="font-semibold">Subscribe</h1>
          <h1 className="font-semibold">Get 10% off your first order</h1>
          <input
            placeholder="Enter Email Here "
            className="outline w-full text-black rounded-full text-center"
          />
        </div>
        {/* 1st div ended */}

        {/* 2nd div */}
        <div className="p-[50px]">
          <h1 className="font-bold">Suport</h1>
          <h1 className="font-semibold">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="font-semibold">exclusive@gmail.com</h1>
          <h1>+88015-88888-9999</h1>
        </div>
        {/* 2nd div ended */}
        {/* 3rd div */}
        <div className="p-[50px]">
          <h1 className="font-bold">Account</h1>
          <h1 className="font-semibold">My Account</h1>
          <h1 className="font-semibold">Login / Register</h1>
          <h1 className="font-semibold">Cart</h1>
          <h1 className="font-semibold">Whitelist</h1>
          <h1 className="font-semibold">Shop</h1>
        </div>
        {/* 3rd div ended */}
        {/* 4rth div */}
        <div className="p-[50px]">
          <h1 className="font-bold">Quick Links</h1>
          <h1 className="font-semibold">Privacy Policy</h1>
          <h1 className="font-semibold">Terms of Use</h1>
          <h1 className="font-semibold">FAQs</h1>
          <h1 className="font-semibold">Contact</h1>
        </div>
        {/* 4rth div ended */}
        {/* 4rth div */}
        <div className="p-[50px]">
          <h1 className="font-bold">Download The App</h1>
          <h1>Scan the QR Code</h1>
          <div className="grid grid-rows-2 grid-cols-2">
            <div className="row-span-1">
              <i className="fa-solid fa-2xl fa-qrcode"></i>
            </div>
            <div>
              <i className="fa-brands fa-google-play"></i>
              <i className="fa-brands fa-app-store"></i>
            </div>
          </div>
          <i className="fa-brands fa-2xl fa-facebook"></i>
          <i className="fa-brands fa-2xl fa-twitter"></i>
          <i className="fa-brands fa-2xl fa-instagram"></i>
        </div>
        {/* 4rth div ended */}
      </div>
      {/* Main Div */}
    </div>
  );
};

export default Footer;
