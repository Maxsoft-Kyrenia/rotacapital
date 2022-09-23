import React from "react";
import icon1 from "../../assets/icon/piyasa_icon.svg";
import icon2 from "../../assets/icon/ikiyon_icon.svg";
import icon3 from "../../assets/icon/etkin_sermaye_icon.svg";

const Sectionfour = () => {
  return (
    //Main Container
    <div className="flex flex-col text-white md:mt-16 mt-32 md:mx-16 mx-6">
      {/*HEADER*/}
      <h2 className="font-bold text-2xl text-center">
        Global Piyasalarda 500’den Fazla Yatırım Aracı
      </h2>
      {/*HEADER*/}
      {/*Div with Flex and its Contents*/}
      <div className="md:flex md:mt-20 w-[100%] mt-10">
        {/*Content @left*/}
        <div className="w-[100%]">
          <h2 className="text-xl font-bold">
            FOREX İŞLEMLERİNE BUGÜN BAŞLAYIN!
          </h2>
          <p className="mt-3 w-[76%]">
            170'ten Fazla Yatırım Aracına Tek Platformdan Erişin, Dilediğiniz
            Yerden İşlem Yapın.
          </p>
          {/*SECTION*/}
          <section className="flex mt-12">
            <img className="mr-2" src={icon1} alt="" />
            <span>
              <h2 className="text-blue font-bold">5/24 Açık Piyasa</h2>
              <p className="font-semibold pr-4">
                Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                anında emtialarda yatırım fırsatlarını değerlendirin.
              </p>
            </span>
          </section>
          {/*SECTION*/}
          {/*SECTION*/}
          <section className="flex mt-12">
            <img className="mr-2" src={icon2} alt="" />
            <span>
              <h2 className="text-blue font-bold">İki Yönlü Yatırım</h2>
              <p className="font-semibold pr-4">
                Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                anında emtialarda yatırım fırsatlarını değerlendirin.
              </p>
            </span>
          </section>
          {/*SECTION*/}
          {/*SECTION*/}
          <section className="flex mt-12">
            <img className="mr-2" src={icon3} alt="" />
            <span>
              <h2 className="text-blue font-bold">Etkin Sermaye Yönetimi</h2>
              <p className="font-semibold pr-4">
                Forex piyasası uyumuyor; hafta içi 5 gün 24 saat, günün her
                anında emtialarda yatırım fırsatlarını değerlendirin.
              </p>
            </span>
          </section>
          {/*SECTION*/}
        </div>
        {/*Content @left*/}
        {/*Div with content @right*/}
        {/*Section with Form @right*/}
        <section className="w-[100%] mr-0 flex items-center justify-center md:mt-0 mt-10">
          {/*FORM*/}
          <section className="bg-primary opacity-95 p-4 rounded-md md:w-[80%] flex flex-col">
            <input
              className="bg-input-bg p-4 rounded-md"
              placeholder="Adiniz Soyadiniz"
            />
            <input
              className="bg-input-bg p-4 mt-3 rounded-md"
              placeholder="E-posta"
            />
            <input
              className="bg-input-bg p-4 mt-3 rounded-md"
              placeholder="Telefon"
            />

            <p className="md:text-base text-sm mt-4">
              Denemeye başla butonuna tıklayarak GCM'den elektronik ileti
              almayı, kullanım koşullarını, kişisel verilerin işlenmesine
              ilişkin aydınlatma metni ve izin Formu'nu kabul ediyorum.
            </p>

            {/*Button*/}
            <button className=" mt-6 text-center justify-center p-5 px-10 rounded rounded-r-full bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl">
              Denemeye başla
            </button>
            {/*Button*/}
          </section>
          {/*FORM*/}
        </section>
        {/*Section with Form @right*/}
        {/*Div with content @right*/}
      </div>
      {/*Div with Flex and its Contents*/}
    </div>
    //Main Container
  );
};

export default Sectionfour;
