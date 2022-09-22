import React from "react";
import vid from "../../assets/images/video_img.jpg";

const Sectionfive = () => {
  return (
    //Main Container
    <div className="bg-background text-white">
      <div className="md:m-16 bg-five-new bg-cover opacity-95 p-8">
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
              <span className="rounded-full bg-primary p-6 hover:bg-white hover:text-black cursor-pointer">
                <h2 className="">1</h2>
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
              <span className="rounded-full bg-primary p-6 hover:bg-white hover:text-black cursor-pointer">
                <h2 className="">1</h2>
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
              <span className="rounded-full bg-primary p-6 hover:bg-white hover:text-black cursor-pointer">
                <h2 className="">1</h2>
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
