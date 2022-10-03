import React from "react";
import vid from "../../assets/images/video_img.jpg";
import num from "../../assets/icon/five_itembg.svg"

const Sectionfive = () => {
  return (
    //Main Container
    <div className=" text-white bg-primary md:m-16 opacity-95 mt-20">
      <div className=" bg-five-new bg-cover opacity-95 md:p-14 p-3">
        {/*Div and its Content with flex*/}
        <div className="md:flex justify-between">
          {/*Video @left*/}
          <div className="w-[100%] mr-10">
            <img className="" src={vid} alt="" />
          </div>
          {/*Video @left*/}
          {/*Content @right*/}
          <div className="w-[100%] md:mt-0 mt-10">

            <section className="flex items-center justify-center">
              <span className="rounded-full bg-primary p-6 w-fit hover:bg-white hover:text-black cursor-pointer">
                <h2 className="bg-num bg-cover p-6 w-fill">1</h2>
              </span>
              <span className="ml-2">
                <h2 className="text-blue font-bold">Etkin Sermaye Yönetimi</h2>
                <p className="pr-10">
                  Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                  anında emtialarda yatırım fırsatlarını değerlendirin.
                </p>
              </span>
            </section>

            <section className="flex items-center justify-center mt-8">
            <span className="rounded-full bg-primary p-6 w-fit hover:bg-white hover:text-black cursor-pointer">
                <h2 className="bg-num bg-cover p-6 w-fill">2</h2>
              </span>
              <span className="ml-2">
                <h2 className="text-blue font-bold">Etkin Sermaye Yönetimi</h2>
                <p className="pr-10">
                  Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                  anında emtialarda yatırım fırsatlarını değerlendirin.
                </p>
              </span>
            </section>

            <section className="flex items-center justify-center mt-8">
            <span className="rounded-full bg-primary p-6 w-fit hover:bg-white hover:text-black cursor-pointer">
                <h2 className="bg-num bg-cover p-6 w-fill">3</h2>
              </span>
              <span className="ml-2">
                <h2 className="text-blue font-bold">Etkin Sermaye Yönetimi</h2>
                <p className="pr-10">
                  Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                  anında emtialarda yatırım fırsatlarını değerlendirin.
                </p>
              </span>
            </section>

          </div>
          {/*Content @right*/}
        </div>
        {/*Div and its Content with flex*/}
      </div>
    </div>
    //Main Container
  );
};

export default Sectionfive;
