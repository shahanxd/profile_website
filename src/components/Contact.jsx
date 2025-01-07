// import stuff
import React from "react";
import mailPortalCoder from "../assets/mail_portal_coder.gif";
import mailPortalEditor from "../assets/mail_portal_editor.gif";

const Contact = ({ isCoderProfile }) => {
  const handleCopyEmail = () => { // email copy functionality
    const email = "shahanxd@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Email copied: " + email);
      })
      .catch(() => {
        alert("Failed to copy email :(");
      });
  };

  return (
    <section className="flex flex-col md:flex-row items-center justify-end lg:py-48 md:py-32 py-12 bg-black text-white px-6">
      {/* text */}
      <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-3xl md:text-5xl font-light">slide in my <a href="mailto:shahanxd@gmail.com"><span className={` transition-all duration-200 ${ isCoderProfile ? 'hover:text-orange-400' : 'hover:text-cyan-300' } `}>inbox</span></a></h1>
        <p className="text-gray-400 mt-4 text-sm lg:text-xl md:text-lg">
          This portal will take you there.. or just{" "}
          <span
            onClick={handleCopyEmail}
            className={`${
              isCoderProfile ? "text-orange-400" : "text-cyan-300"
            } cursor-pointer hover:text-white transition-colors duration-200 ease-in-out`}
          >
            copy email
          </span>
          .. or just view{" "}
          <a
            href="https://www.linkedin.com/in/shahanxd"
            target="blank"
            className={`${
              isCoderProfile ? "text-orange-400" : "text-cyan-300"
            } cursor-pointer hover:text-white transition-colors duration-200 ease-in-out`}
          >
            linkedin
          </a>
          .. or just check out{" "}
          <a
            href="https://www.github.com/shahanxd"
            target="blank"
            className={`${
              isCoderProfile ? "text-orange-400" : "text-cyan-300"
            } cursor-pointer hover:text-white transition-colors duration-200 ease-in-out`}
          >
            github
          </a>
          .. or just..
        </p>
      </div>

      {/* mail portal */}
      <div className="flex-1 flex items-center justify-center group">
        <a href="mailto:shahanxd@gmail.com" className="relative">
          <img
            src={` ${ isCoderProfile ? mailPortalCoder : mailPortalEditor } `}
            alt="Mail Portal Animation"
            className="transition-transform duration-200 ease-in-out group-hover:scale-110"
          />
        </a>
      </div>
    </section>
  );
};

export default Contact;