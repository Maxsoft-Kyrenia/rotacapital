import React from "react";
import al_icon from "../../assets/icon/al_sat_icon.svg";

const Sectiontwo = () => {
  return (
    //Section Two Container
    <div className="p-4 m-2">
      {/* Div with three Sections*/}
      <div className="md:flex bg-secbg p-6 rounded-md md:mx-4">
        {/*Section*/}
        <section className="bg-primary rounded-md text-white md:mr-10 mr-0">
          {/*Top*/}
          <div className="flex items-center">
            <span className="bg-alt p-3 px-8 rounded-r-full mr-2">
              <img className="" src={al_icon} alt="" />
            </span>
            <h2 className="font-bold">Al/Sat Sinyal Servisi</h2>
          </div>
          {/*Top*/}

          {/*Text*/}
          <p className="pt-4 px-10 pb-10">
            Uzman analiz ekibimizin anlık AL/SAT önerilerinden cep telefonunuza
            indirdiğiniz mobil uygulamamız üzerinden yararlanabilirsiniz.
          </p>
          {/*Text*/}
        </section>
        {/*Section*/}

        {/*Section*/}
        <section className="bg-primary rounded-md text-white md:mr-10 mr-0 md:mt-0 mt-8">
          {/*Top*/}
          <div className="flex items-center">
            <span className="bg-alt p-3 px-8 rounded-r-full mr-2">
              <img className="" src={al_icon} alt="" />
            </span>
            <h2 className="font-bold">Hızlı Para Yatırma/Çekme</h2>
          </div>
          {/*Top*/}

          {/*Text*/}
          <p className="pt-4 px-20 pb-10">
            Bu kadar kolay ve sorunsuz para yatırıp çekebileceğinize sizler de
            inanamayacaksınız.
          </p>
          {/*Text*/}
        </section>
        {/*Section*/}

        {/*Section*/}
        <section className="bg-primary rounded-md text-white md:mt-0 mt-8">
          {/*Top*/}
          <div className="flex items-center">
            <span className="bg-alt p-3 px-8 rounded-r-full mr-2">
              <img className="" src={al_icon} alt="" />
            </span>
            <h2 className="font-bold">Lisanslı Aracı Kurum</h2>
          </div>
          {/*Top*/}

          {/*Text*/}
          <p className="pt-4 px-10 pb-10">
            GLOFSA tarafından yetkilendirilmiş aracı kurum lisansımız ile
            güvenilir forex hizmeti alacaksınız.
          </p>
          {/*Text*/}
        </section>
        {/*Section*/}
      </div>
      {/* Div with three Sections*/}
    </div>
    //Section Two Container
  );
};

export default Sectiontwo;
