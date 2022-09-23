import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { Icon } from "@iconify/react";
import mail_icon from "../assets/icon/mail_icon.svg";
import phone_icon from "../assets/icon/phone_icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    //Main Container
    <div className="relative pt-2">
      {/*Div wit its Content 1.Logo 2.Navlinks 3. Button */}
      <div className="mt-2 md:mx-16 mx-6 p-3 flex justify-between text-white items-center opacity-95 bg-primary md:rounded-l-md md:rounded-r-full rounded-md">
        {/*LOGO*/}
        <section>
          <Link to={"/"}>
            <img className="md:w-fit w-[63%]" src={logo} alt="" />
          </Link>
        </section>
        {/*LOGO*/}

        {/*NavLinks*/}
        <section className="md:flex hidden">
          <ul className="flex text-base font-semibold">
            <li className="hover:text-blue cursor-pointer mr-5">
             <Link to={'/about'}> Consultancy Services</Link>
            </li>
            <li className="hover:text-blue cursor-pointer mr-5"> <Link to={'/butlener'}> Corporate</Link></li>
            <li className="hover:text-blue cursor-pointer mr-5"><Link to={'/platform'}> Platform</Link></li>
            <li className="hover:text-blue cursor-pointer"><Link to={'/contact'}> Contact</Link></li>
          </ul>
        </section>
        {/*NavLinks*/}

        {/*Button*/}
        <button className=" md:flex hidden p-6 rounded rounded-r-full bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl">
        <Link to={'/demo'}> Hesap Oluštur</Link>
        </button>
        {/*Button*/}

        {/*Menu Icon*/}
        <Icon
          icon="charm:menu-hamburger"
          className="cursor-pointer md:hidden block"
          style={{ fontSize: "30px" }}
          onClick={() => setOpen(!open)}
        />
        {/*Menu Icon*/}
      </div>
      {/*Div wit its Content 1.Logo 2.Navlinks 3. Button */}

      {/*Menu for Mobile Device*/}
      <div
        className={`${
          open
            ? "md:hidden block bg-background float-right fixed right-0 top-0 z-10 h-full w-fit animate-in duration-700 fade-in-75 zoom-in-95 slide-in-from-right-72 fade-out-75 zoom-out-95 slide-out-to-right-72"
            : "hidden"
        }`}
      >
        <section className="pt-7 mr-8 md:hidden block bg-background">
          <Icon
            icon="ant-design:close-outlined"
            style={{ fontSize: "30px", color: "#fff" }}
            className="pl-1 ml-2 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          {/*Button*/}
          <button className=" text-white p-6 rounded-l-lg rounded-r-full bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl mt-5">
           <Link to={'/demo'}> Hesap Oluštur</Link>
          </button>
          {/*Button*/}

          {/*NavLinks*/}
          <section className="ml-6 mt-10 text-white">
            <ul className="text-base font-semibold">
              <li className="hover:text-blue cursor-pointer mt-5">
              <Link to={'/about'}> Consultancy Services</Link>
              </li>
              <li className="hover:text-blue cursor-pointer mt-5"><Link to={'/butlener'}> Corporate</Link></li>
              <li className="hover:text-blue cursor-pointer mt-5"><Link to={'/platform'}> Platform</Link></li>
              <li className="hover:text-blue cursor-pointer mt-5"><Link to={'/contact'}> Contact</Link></li>
            </ul>
          </section>
          {/*NavLinks*/}

          {/*Mail and Phone*/}
          <section className="ml-6 text-white mt-10">
            <h2 className="mr-2 flex items-center">
              {" "}
              <span className="mr-2">
                {" "}
                <img className="" src={phone_icon} alt="" />{" "}
              </span>{" "}
              +90 556 887 44 15
            </h2>
            <h2 className="mr-6 flex items-center mt-4">
              {" "}
              <span className="mr-2">
                {" "}
                <img className="" src={mail_icon} alt="" />{" "}
              </span>{" "}
              design@monegon.com
            </h2>
            <p className="text-sm text-center mt-8">
              Lisanslı ve Geniş Yetkili Aracı
            </p>
            <p className="text-sm text-center">
              Kurum - Lisans No: G-039 (398)
            </p>
          </section>
          {/*Mail and Phone*/}
        </section>
      </div>
      {/*Menu for Mobile Device*/}
    </div>
    //Main Container
  );
};

export default Navbar;
