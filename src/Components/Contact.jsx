import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagramSquare,
  FaLinkedin,
  FaPhoneAlt,
  FaTelegramPlane,
} from "react-icons/fa";
import { PropagateLoader } from "react-spinners";

import { SaveEmail, SendEmail } from "../Apis/ContactApi";
import { toast } from "react-toastify";

function Contact() {
  const [isActiveLoader, setIsActiveLoader] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  const handleContactSubmit = async () => {
    setIsActiveLoader(true);
    try {
      const Data = {
        name: name,
        email: email,
        message: message,
        subject: subject,
      };
      console.log(Data);
      if (!name || !email || !message || !message) {
        toast.error("All fields are required");
        setIsActiveLoader(false);
      } else {
        const Saveresponse = await SaveEmail(Data);
        if (Saveresponse.success === true) {
          console.log("Email Saved Successfully");
        } else {
          console.log(Saveresponse);
          toast.error("Enter Valid Email");
          setIsActiveLoader(false);
        }

        const Sendresponse = await SendEmail(Data);
        if (Sendresponse.success === true) {
          toast.success("Email Sent Successfully");
          setName("");
          setEmail("");
          setMessage("");
          setSubject("");
          setIsActiveLoader(false);
        } else {
          console.log(Sendresponse);
          toast.error("Enter Valid Email");
          setIsActiveLoader(false);
        }
      }
    } catch (error) {
      toast.error("something went wrong");
      setIsActiveLoader(false);
    }
  };
  const handleEmailClick = (event) => {
    event.preventDefault();
    const mailtoLink = `mailto:${JSON.stringify(
      import.meta.env.VITE_REACT_APP_MY_Email
    )}`;
    window.location.href = mailtoLink;
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${JSON.stringify(
      import.meta.env.VITE_REACT_APP_MY_PhoneNO
    )}`;
  };

  return (
    <div className="py-16" id="contact">
      <div className="md:h-screen">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold text-white text-center py-8">
            Contact Me !
          </h1>
        </div>

        <div className="md:flex">
          {isActiveLoader && (
            <div className=" absolute flex backdrop-blur-sm md:w-[65%] w-[100%]  flex-col md:h-[65%] h-[67%] justify-center items-center gap-3 ">
              <div>
                <label className="text-white text-3xl">Sending Mail....</label>
              </div>
              <div className="">
                <PropagateLoader
                  color="#00FFFF"
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            </div>
          )}
          <div className="md:w-[70%] pt-4">
            <div className="flex flex-col  items-center md:flex-row justify-center gap-8 ">
              <input
                type="text"
                id="Name"
                value={name}
                placeholder="Your Name"
                className="bg-[#262626] text-white pl-8 border-2 border-[#06BF96] shadow-md shadow-[#06BF96]  h-[50px] w-[80%] md:w-[38%] rounded-lg"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <input
                type="text"
                id="Email"
                value={email}
                placeholder="Your Email"
                className="bg-[#262626] text-white pl-8 border-2 border-[#06BF96] shadow-md shadow-[#06BF96]  h-[50px] w-[80%] md:w-[38%] rounded-lg"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center  py-7">
              <input
                type="text"
                id="Subject"
                value={subject}
                placeholder="Enter Subject"
                className="bg-[#262626] text-white pl-8  h-[50px] w-[80%] rounded-lg border-2 border-[#06BF96] shadow-md shadow-[#06BF96] "
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center ">
              <textarea
                type="text"
                id="Message"
                value={message}
                placeholder="Your Message"
                className="bg-[#262626] text-white pl-8 h-[200px]   w-[80%] rounded-lg border-2 border-[#00FFFF] shadow-md shadow-[#00FFFF] "
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              />
            </div>
            <div className="flex justify-center py-6">
              <div className="w-[80%] flex md:justify-start justify-center">
                <button
                  className="h-[40px] w-[150px] rounded-lg bg-slate-900 text-white shadow-md borger-2 border-black shadow-[#00FFFF] "
                  onClick={handleContactSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
          <div className="md:w-[30%] text-white md:items-start items-center flex flex-col gap-5 ">
            <div>
              <a
                href="#"
                onClick={handleEmailClick}
                className="flex items-center gap-4 "
              >
                <FaTelegramPlane className="text-4xl text-[#06BF96]" />
                abhilashpal128@gmail.com
              </a>
            </div>
            <div>
              <a
                href="#"
                onClick={handlePhoneClick}
                className="flex items-center gap-4 "
              >
                <FaPhoneAlt className="text-4xl text-[#06BF96]" />
                <h1>+91 8928996887</h1>
              </a>
            </div>
            <div className="flex gap-4 text-3xl text-[#ababab]  ">
              <a
                href="https://www.linkedin.com/in/abhilashpal8928/"
                target="_blank"
              >
                <FaLinkedin className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a href="https://github.com/Abhilashpal128" target="_blank">
                <FaGithub className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a
                href="https://www.facebook.com/abhilash.pal.9638"
                target="_blank"
              >
                <FaFacebook className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
              <a
                href="https://www.instagram.com/abhilash.pal.9638/"
                target="_blabk"
              >
                <FaInstagramSquare className="hover:text-[#00FFFF] hover:scale-125 duration-500" />
              </a>
            </div>
            <div className="py-3">
              <a
                href="https://drive.google.com/file/d/1P98h_2tVV7aSWicoTz-ndPJQQ5MomxMr/view?usp=sharing"
                target="_blank"
              >
                <button className="h-[40px] bg-slate-900 text-white shadow-md shadow-[#06BF96]   rounded-md w-[150px]">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
