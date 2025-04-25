import React from "react";

export const Contact = () => {
  return (
    <div className="relative px-8 py-16 flex flex-col md:flex-row justify-center  min-h-[50vh] max-w-full mx-auto">
      
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute opacity-50 top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/images/vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Left content */}
      <div className="max-w-2xl mx-4 h-full space-y-6 z-10">
        <h1
          className="text-[2.5rem] md:text-[4rem] font-[Monument] uppercase text-transparent font-bold tracking-widest hover:text-amber-300 transition-colors duration-300"
          style={{ WebkitTextStroke: "2px black" }}
        >
          Travaillons ensemble
        </h1>

        <p className="text-lg leading-relaxed font-[nippo] text-black">
          Immobilier, rénovations, artisanat ou fournitures — quelle que soit
          votre ambition, nous sommes là pour la concrétiser avec vous. <br />
          <a
            href="mailto:vecotradiv.34@gmail.com"
            className="underline italic hover:text-amber-400 transition"
          >
            Écrivez-nous
          </a>{" "}
          ou{" "}
          <a
            href="tel:+1234567890"
            className="group underline italic hover:text-amber-400 transition"
          >
            appelez-nous dès maintenant
          </a>
          .
        </p>
      </div>

      {/* Divider */}
      <div className="hidden md:block w-px border border-black border-dashed mx-12" />

      {/* Right section */}
      <div className="flex flex-col w-full md:w-1/2 p-6 space-y-6 font-[nippo] z-10">
        <div>
          <h2 className="text-[2rem] font-medium">Contacts</h2>
          <div className="space-y-2">
            {[
              { href: "tel:+212676824404", label: "+212 676-824404" },
              { href: "tel:+212600586822", label: "+212 600-586822" },
              {
                href: "mailto:vecotradiv.34@gmail.com",
                label: "vecotradiv.34@gmail.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="group flex items-center gap-3 text-[1.6rem] text-transparent transition-all duration-300 hover:text-black"
                style={{ WebkitTextStroke: "0.8px black" }}
              >
                <span className="inline-block transition-all duration-300 group-hover:-rotate-45 group-hover:-translate-y-[2px]">
                  →
                </span>
                <span className="transition-all duration-300 group-hover:text-black group-hover:stroke-none">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-[2rem] font-medium">Address</h2>
          <p
            className="text-[1.6rem] text-transparent hover:text-black transition-colors duration-300"
            style={{ WebkitTextStroke: "0.8px black" }}
          >
            ADR_Av Med 5 N°132, amougay <br />
            Dchiera Boite postal 308, Inezgane
          </p>
        </div>
      </div>
    </div>
  );
};
