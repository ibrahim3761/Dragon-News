import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

const FindUsOut = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us On</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn bg-white justify-start join-item">
           <FaFacebook size={20}></FaFacebook> Facebook
          </button>
          <button className="btn bg-white justify-start join-item">
            <FaTwitter size={20}></FaTwitter> Twitter
          </button>
          <button className="btn bg-white justify-start join-item">
            <FaInstagram size={20}></FaInstagram> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUsOut;
