import React from "react";
import MarqueeBanner from "../components/MarqueeBanner";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Marquee at the top */}
      <div className="font-[Monument] font-bold tracking-widest">
        <MarqueeBanner
          position="top"
          bg="bg-transparent"
          textColor="text-black"
          size="text-[5.8rem]"
          text="&nbsp;&nbsp; Travaillons ensemble&nbsp;&nbsp;
          • &nbsp;&nbsp; Écrivez-nous &nbsp;&nbsp;
          • &nbsp;&nbsp; Donnons vie à vos idées &nbsp;&nbsp;
          • &nbsp;&nbsp; Toujours disponible &nbsp;&nbsp;"
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-start gap-10 my-8 px-8 md:px-20 pb-5 w-full">
        {/* Left Column - Contact Info */}
        <div className="flex-1 flex flex-col justify-start space-y-3 font-[nippo]">
          {/* Contact Info */}
          <div className="space-y-3">
            <h2 className="uppercase text-[1.5rem] md:text-[2.1rem] font-[Monument] font-medium tracking-widest transition-colors duration-300">
              Contact
            </h2>

            <div className="flex flex-col space-y-2 text-[0.7rem] md:text-[1rem]">
              <a
                href="mailto:vecotradiv.34@gmail.com"
                className="link-underline w-fit"
              >
                vecotradiv.34@gmail.com
              </a>
              <a href="tel:+212676824404" className="link-underline w-fit">
                +212 676-824404
              </a>
              <a href="tel:+212600586822" className="link-underline w-fit">
                +212 600-586822
              </a>
              <a href="#" className="link-underline w-fit">
                Instagram ↗
              </a>
              <a href="#" className="link-underline w-fit">
                LinkedIn ↗
              </a>
              <a href="#" className="link-underline w-fit">
                Twitter ↗
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="space-y-2 ">
            <h2 className="uppercase text-[1.5rem] md:text-[2.1rem] font-[Monument] font-medium tracking-widest transition-colors duration-300">
              Address
            </h2>
            <p className="text-[0.7rem] md:text-[1rem]">
              ADR_Av Med 5 N°132, Amougay
              <br />
              Dchiera BP 308, Inezgane
            </p>
            <a
              href="https://maps.google.com"
              target="_blank"
              className="link-underline w-fit"
            >
              Get Directions ↗
            </a>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="flex-1 font-[Monument] ">
          <h2 className="mb-5  uppercase text-[0.5rem] md:text-[1.1rem] font-[Monument] font-medium tracking-widest transition-colors duration-300">
          Vous voulez travailler ensemble ?
          </h2>
          <form className="flex flex-col space-y-6 font-[nippo]">
            <input
              type="text"
              placeholder="Name"
              className="border-b border-dashed border-black bg-transparent focus:outline-none py-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-b border-dashed border-black bg-transparent focus:outline-none py-2"
            />
            <textarea
              placeholder="Message"
              className="border-b border-dashed border-black bg-transparent focus:outline-none py-2 h-32 resize-none"
            />
            <button
              type="submit"
              className="border-2 border-dashed border-black py-2 px-6 uppercase font-bold hover:bg-black hover:text-white transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
