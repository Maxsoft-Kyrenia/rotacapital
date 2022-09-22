import React from "react";
import apple from "../../assets/icon/appstore_icon.svg";
import meta from "../../assets/images/metatrader_img.svg";
import google from "../../assets/icon/googleplay_icon.svg";
import desktop from "../../assets/icon/desktop_icon.svg";

const Sectionseven = () => {
  return (
    <div className="md:p-20 p-6 mt-10 motion-safe:animate-fadeIn">
      <div className="md:flex w-[100%] md:justify-between ">
        <div data-aos="fade-right" className="w-[100%] mr-20">
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
            <img className="md:w-[26%] mr-4 md:mt-0 mt-3" src={apple} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionseven;
