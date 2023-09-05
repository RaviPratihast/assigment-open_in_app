import React, { useState } from "react";
import { Button, InputWithLabel } from "../component-index";

const Modal = ({ isOpen, onClose }) => {
  const [toggleBetweenSocialBasic, setToggleBetweenSocialBasic] =
    useState(true);
  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
        <div className=" bg-white w-544 h-376 rounded-lg shadow-lg z-50 overflow-y-auto">
          <div className=" flex flex-col py-4 text-left border w-80 border-black px-6">
            <div
              className="modal-close cursor-pointer z-50"
              onClick={onClose}
            ></div>
            <div className="flex justify-between border-line w-full mt-2 ">
              <p className="text-sm font-bold">Add New Profile</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                viewBox="0 0 24 25"
                fill="none"
                onClick={onClose}
                className="cursor-pointer"
              >
                <path
                  d="M5.25 5.75L12 12.5M12 12.5L5.25 19.25M12 12.5L18.75 19.25M12 12.5L18.75 5.75"
                  stroke="#999CA0"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="">
              <div className="flex justify-evenly mt-4">
                <h6
                  className={`flex items-center justify-center font-bold text-sm cursor-pointer ${
                    toggleBetweenSocialBasic
                      ? "border-b-4 border-buttonBlue"
                      : "border-b-4 border-gray-100"
                  } w-28`}
                  onClick={() => setToggleBetweenSocialBasic(true)}
                >
                  Basic
                </h6>
                <h6
                  className={`flex items-center justify-center font-bold text-sm cursor-pointer ${
                    toggleBetweenSocialBasic
                      ? "border-b-4 border-gray-100"
                      : "border-b-4 border-buttonBlue"
                  } w-28`}
                  onClick={() => setToggleBetweenSocialBasic(false)}
                >
                  Contact
                </h6>

                {/* contact page */}
              </div>
              {toggleBetweenSocialBasic ? (
                <div className="mt-7">
                  <InputWithLabel
                    label="Enter Name*"
                    type="text"
                    placeholder="John Doe"
                  />
                  <InputWithLabel
                    label="Enter Email*"
                    type="email"
                    placeholder="John@xyz.com"
                  />
                  <InputWithLabel
                    label="Enter Phone*"
                    type="tel"
                    placeholder="9123445677"
                  />
                </div>
              ) : (
                <div className="mt-7">
                  <InputWithLabel
                    label="Instagram Link (Optional)"
                    type="text"
                    placeholder="Eg. ..instagram.com/username"
                  />
                  <InputWithLabel
                    label="Youtube Link (Optional)"
                    type="email"
                    placeholder="Eg. ..youtube/username"
                  />
                </div>
              )}

              {/* social Page */}
            </div>
            <div className="flex items-end justify-end w-full">
              <Button className="rounded-md  bg-buttonBlue h-7 w-11 text-white text-xs ">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
