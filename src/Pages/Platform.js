import React from "react";
import platform from "../../src/assets/images/platform_icon.svg";
import platformig from "../../src/assets/images/platformig.png";
import apple from "../../src/assets/icon/appstore_icon.svg";
import meta from "../../src/assets/images/metatrader_img.svg";
import google from "../../src/assets/icon/googleplay_icon.svg";
import desktop from "../../src/assets/icon/desktop_icon.svg";
import right from "../../src/assets/images/plat_two_scene.svg"

const Platform = () => {
  return (
    //Main Container
    <div className="md:mx-16 mx-6 text-white mt-20 mb-20">
      {/*Div with Header Content*/}
      <div className="bg-hero-pattern bg-cover">
        <div className="bg-gradient-to-r from-light to-dark p-12 rounded-md md:flex">
          <section className="w-[100%]">
            <h2 className="text-2xl font-bold">
              MetaTrader 4 Profesyonel 500’den Fazla Yatırım Aracı
            </h2>
            <p className="mt-4">
              MetaTrader 4 platformu, dünya çapında acemiden profesyonele her
              seviyedeki yatırımcının en çok kullandığı işlem platformu olma
              özelliğini taşır. Çünkü MetaTrader 4 kullanırken kullanıcı dostu
              arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı
              olumlu etkileyecek düzenlemeleri edinebilirsiniz.
            </p>
            <img
              className="p-4 rounded-full bg-plat mt-10"
              src={platform}
              alt=""
            />
          </section>
          <section className="w-[100%] bg-background rounded-md md:mt-0 mt-10">
            <img className="" src={platformig} alt="" />
          </section>
        </div>
      </div>
      {/*Div with Header Content*/}

      <div className="mt-20 bg-primary rounded-lg">
        <div className="md:flex w-[100%] md:justify-between md:p-16 p-6">
          <div className="w-[100%] mr-20">
            <img className="md:w-[90%]" src={meta} alt="" />
          </div>
          <div className="w-[100%]">
            <h1 className="md:text-2xl text-2xl font-semibold text-white mt-4">
              MetaTrader 4 Profesyonel
            </h1>
            <h1 className="md:text-2xl text-2xl font-semibold text-white">
              <span className="text-blue">500’den</span>
              Fazla Yatırım Aracı
            </h1>
            <p className="mt-2 text-white">
              MetaTrader 5 platformu, dünya çapında acemiden profesyonele her
              seviyedeki yatırımcının en çok kullandığı işlem platformu olma
              özelliğini taşır. Çünkü MetaTrader 5 kullanırken kullanıcı dostu
              arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı
              olumlu etkileyecek düzenlemeleri edinebilirsiniz.
            </p>
            <div className="md:flex mt-10 text-center">
              <img className="md:w-[26%] mr-4" src={google} alt="" />
              <img
                className="md:w-[26%] mr-4 md:mt-0 mt-3"
                src={desktop}
                alt=""
              />
              <img
                className="md:w-[26%] mr-4 md:mt-0 mt-3"
                src={apple}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 bg-primary rounded-lg">
        <div className="md:flex w-[100%] md:justify-between md:p-16 p-6">
          <div className="w-[100%] md:mr-20">
            <h1 className="md:text-2xl text-2xl font-semibold text-white mt-4">
              MetaTrader 4 Profesyonel
            </h1>
            <h1 className="md:text-2xl text-2xl font-semibold text-white">
              <span className="text-blue">500’den</span>
              Fazla Yatırım Aracı
            </h1>
            <p className="mt-2 text-white">
              MetaTrader 5 platformu, dünya çapında acemiden profesyonele her
              seviyedeki yatırımcının en çok kullandığı işlem platformu olma
              özelliğini taşır. Çünkü MetaTrader 5 kullanırken kullanıcı dostu
              arayüzü ve özelleştirilebilir yapısı ile işlem performansınızı
              olumlu etkileyecek düzenlemeleri edinebilirsiniz.
            </p>
          </div>
          <div className="w-[100%]">
            <img className="md:w-[90%]" src={right} alt="" />
          </div>
        </div>
      </div>
    </div>
    //Main Container
  );
};

export default Platform;
