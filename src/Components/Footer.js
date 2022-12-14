import React from "react";
import logo from "../../src/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    //Main Container
    <div className="md:mx-16 text-white mx-2">
      {/*Div with Borders*/}
      <div className="border-2 border-border rounded-md">
        <div className="md:flex justify-between md:p-12 p-6">
        {/*SECTIONS*/}
        <section>
          <Link to={'/'}>
          <img className="cursor-pointer" src={logo} alt="" />
          </Link>
        </section>
        {/*SECTIONS*/}

      <div className="flex justify-between md:mt-0 mt-10">
          {/*SECTIONS*/}
          <section className="md:mr-12">
          <h2 className="font-bold text-blue">Bağlantılar</h2>
          <ul className="mt-2">
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">Hizmetlerim</li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
          </ul>
        </section>
        {/*SECTIONS*/}

        {/*SECTIONS*/}
        <section>
          <h2 className="font-bold text-blue">Bağlantılar</h2>
          <ul className="mt-2">
            <li className="hover:text-blue cursor-pointer">
              <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
              <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">Hizmetlerim</li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
          </ul>
        </section>
        {/*SECTIONS*/}
      </div>

        {/*SECTIONS*/}
        <section className="md:mt-0 mt-10">
          <h2 className="font-bold text-blue">Bağlantılar</h2>
          <ul className="mt-2">
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">Hizmetlerim</li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/politikasi'}> Gizlilik Politikası</Link>
            </li>
            <li className="hover:text-blue cursor-pointer">
            <Link to={'/butlener'}>Kullanım Koşulları</Link>
            </li>
          </ul>
        </section>
        {/*SECTIONS*/}

        {/*SECTIONS*/}
        <section className="md:mt-0 mt-6">
          <h2 className="font-bold text-blue">Sosyal Medya</h2>
          <ul className="flex justify-between mt-2">
            <li className="p-3 border-2 border-border rounded-md flex items-center justify-center hover:bg-blue mr-2">
              <a href="#">
                <svg
                  id="instagram"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.366"
                  height="21.366"
                  viewBox="0 0 21.366 21.366"
                >
                  <path
                    id="Path_402"
                    data-name="Path 402"
                    d="M174.847,180.124a5.457,5.457,0,1,1,5.457-5.457A5.463,5.463,0,0,1,174.847,180.124Zm0-8.646a3.189,3.189,0,1,0,3.189,3.189A3.193,3.193,0,0,0,174.847,171.478Z"
                    transform="translate(-164.09 -163.922)"
                    fill="#fff"
                  />
                  <ellipse
                    id="Ellipse_5"
                    data-name="Ellipse 5"
                    cx="1.284"
                    cy="1.284"
                    rx="1.284"
                    ry="1.284"
                    transform="translate(14.862 4.011)"
                    fill="#fff"
                  />
                  <path
                    id="Path_403"
                    data-name="Path 403"
                    d="M99.374,105.486H90.231a6.118,6.118,0,0,1-6.111-6.111V90.231a6.118,6.118,0,0,1,6.111-6.111h9.143a6.118,6.118,0,0,1,6.111,6.111v9.143A6.119,6.119,0,0,1,99.374,105.486Zm-9.142-19.1a3.848,3.848,0,0,0-3.843,3.843v9.143a3.848,3.848,0,0,0,3.843,3.843h9.143a3.848,3.848,0,0,0,3.843-3.843V90.231a3.848,3.848,0,0,0-3.843-3.843H90.231Z"
                    transform="translate(-84.12 -84.12)"
                    fill="#fff"
                  />
                </svg>
              </a>
            </li>
            <li className="p-3 border-2 border-border rounded-md flex items-center justify-center hover:bg-blue mr-2">
              <a href="#">
                <svg
                  id="youtube"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23.6"
                  height="16.524"
                  viewBox="0 0 23.6 16.524"
                >
                  <path
                    id="Path_407"
                    data-name="Path 407"
                    d="M23.114,2.586a2.957,2.957,0,0,0-2.08-2.08C19.187,0,11.8,0,11.8,0S4.413,0,2.566.486a3.017,3.017,0,0,0-2.08,2.1A31.156,31.156,0,0,0,0,8.262a31.042,31.042,0,0,0,.486,5.676,2.957,2.957,0,0,0,2.08,2.08c1.866.505,9.234.505,9.234.505s7.387,0,9.234-.486a2.957,2.957,0,0,0,2.08-2.08A31.157,31.157,0,0,0,23.6,8.282a29.573,29.573,0,0,0-.486-5.7Zm0,0"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                  <path
                    id="Path_408"
                    data-name="Path 408"
                    d="M204.969,109.561l6.143-3.538-6.143-3.538Zm0,0"
                    transform="translate(-195.521 -97.76)"
                    fill="#041726"
                  />
                </svg>
              </a>
            </li>
            <li className="p-3 border-2 border-border rounded-md flex items-center justify-center hover:bg-blue mr-2">
              <a href="#">
                <svg
                  id="linkedin"
                  xmlns="http://www.w3.org/2000/svg"
                  width="19.528"
                  height="19.528"
                  viewBox="0 0 19.528 19.528"
                >
                  <path
                    id="Path_404"
                    data-name="Path 404"
                    d="M21.105,20.94h0V13.777c0-3.5-.754-6.2-4.85-6.2a4.252,4.252,0,0,0-3.83,2.1h-.057V7.9H8.489V20.939h4.044V14.483c0-1.7.322-3.343,2.427-3.343,2.074,0,2.1,1.94,2.1,3.452V20.94Z"
                    transform="translate(-1.582 -1.411)"
                    fill="#fff"
                  />
                  <path
                    id="Path_405"
                    data-name="Path 405"
                    d="M.4,7.977H4.445V21.015H.4Z"
                    transform="translate(-0.074 -1.486)"
                    fill="#fff"
                  />
                  <path
                    id="Path_406"
                    data-name="Path 406"
                    d="M2.345,0A2.356,2.356,0,1,0,4.69,2.345,2.346,2.346,0,0,0,2.345,0Z"
                    fill="#fff"
                  />
                </svg>
              </a>
            </li>
            <li className="p-3 border-2 border-border rounded-md flex items-center justify-center hover:bg-blue">
              <a href="#">
                <svg
                  id="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21.366"
                  height="21.366"
                  viewBox="0 0 21.366 21.366"
                >
                  <path
                    id="Path_409"
                    data-name="Path 409"
                    d="M18.7,0H2.671A2.673,2.673,0,0,0,0,2.671V18.7a2.673,2.673,0,0,0,2.671,2.671H18.7A2.673,2.673,0,0,0,21.366,18.7V2.671A2.673,2.673,0,0,0,18.7,0Z"
                    fill="#fff"
                  />
                  <path
                    id="Path_410"
                    data-name="Path 410"
                    d="M202.015,102.677h-3.338v-2.671c0-.737.6-.668,1.335-.668h1.335V96h-2.671a4.006,4.006,0,0,0-4.006,4.006v2.671H192v3.338h2.671v7.344h4.006v-7.344h2Z"
                    transform="translate(-183.988 -91.994)"
                    fill="#041726"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </section>
        {/*SECTIONS*/}
        </div>

        <hr className="w-[100%] mb-2 text-border opacity-60"></hr>
        <p className="md:px-12 pt-6 pb-4 px-6 md:text-base text-sm">
          İletişime geçmek ve sorularınızı sormak için İletişim ve Soru Cevap
          sayfasına giderek yorum kısmından sorularınızı sorabilirsiniz.
          Genellikle 24 saat içinde cevap verilmiş olacaktır.
        </p>
      </div>
      {/*Div with Borders*/}
    </div>
    //Main Container
  );
};

export default Footer;
