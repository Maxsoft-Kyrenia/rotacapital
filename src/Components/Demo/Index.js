import React from "react";
import demo from "../../assets/images/demo_userimg.png";
import acco from "../../assets/images/acco_bg.svg"

const Index = () => {
  return (
    //Main Container
    <div className="md:m-16 m-6 bg-primary text-white mb-20">
      <div className="md:flex justify-between">
        <div className="bg-gradient-to-r from-light to-dark w-[100%] rounded-r-full">
          <div className="md:flex justify-between">
            {/*Section @left [Image]*/}
   
            <img className="" alt="" src={demo} />
          </div>
          {/*Section @left [Image]*/}
        </div>

        {/*Section @right [Form]*/}
        <div className="w-[100%] md:p-12 p-4 md:px-20">
          <h2 className="font-bold">
            <span className="text-blue">Demo</span> Hesap Oluştur
          </h2>
          <p className="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <input
            className="bg-inp p-3 rounded-md md:mt-4 mt-8 w-[96%]"
            placeholder="Ad Soyad"
          />
          <input
            className="bg-inp p-3 rounded-md mt-4 w-[96%]"
            placeholder="E-Posta"
          />
          <input
            className="bg-inp p-3 rounded-md mt-4 w-[96%]"
            placeholder="Telefon"
          />
          {/*Button*/}
          <button className=" mt-6 text-center w-[96%] justify-center p-5 px-10 rounded-md bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl">
              Hesap Oluśtur
            </button>
            {/*Button*/}
        </div>
        {/*Section @right [Form]*/}
      </div>
    </div>
    //Main Container
  );
};

export default Index;
