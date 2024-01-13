import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div>
   
      {/* main div */}
      <div className="grid grid-cols-1 w-full sm:content-center sm:grid-cols-1 sm:gap-4 md:grid-cols-3">
        {/*left side div */}
        <div className=" h-auto font-semibold text-justify mx-3">
          <i className="fa-solid text-red-600  fa-xl fa-phone"></i>
          <span className="text-2xl mx-3">Call To Us</span>
          <h1 className="pt-3">We are available 24/7, 7 days a week.</h1>
          <h1 className="pt-2">Phone: +92345566778</h1>

          <div className="pt-2">
            <i className="fa-solid fa-xl text-red-600 fa-envelope"></i>
            <span className="text-2xl mx-3">Email To Us</span>
            <h1 className="pt-3">
              Fill out our form and we will contact you within 24 hours.
            </h1>
            <h1 className="pt-3">Emails: customer@exclusive.com</h1>
            <h1 className="pt-3">Emails: support@exclusive.com</h1>
          </div>
        </div>
        {/*left side div ended */}
        {/* Right side div */}
        <form
          className="flex flex-col mx-3
            "
          onClick={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-bold mb-3">Your Message</h1>

          {/* <label>Name</label> */}

          <input
            type="text"
            placeholder="First Name  "
            className="placeholder:text-start  h-10 border-opacity-25  border-b border-black mb-6 outline-none"
            autoComplete="true"
          />

          <input
            type="email"
            placeholder="Email or Phone Number "
            className="placeholder:text-start   h-10 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
          />

          <textarea
            type="text"
            placeholder="Your Suggestions to Us "
            className="placeholder:text-start h-20 border-opacity-25 border-b border-black mb-6 outline-none"
            autoComplete="true"
          />
          <button className="bg-red-500  font-bold h-[40px] text-white">
            Send Us Query
          </button>
        </form>

        {/* Right side div ended */}
      </div>
      {/* main div ended */}
     
    </div>
  );
};

export default ContactUs;
