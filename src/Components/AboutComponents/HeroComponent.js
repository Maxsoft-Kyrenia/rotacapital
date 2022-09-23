import React from "react";
import about_img from "../../assets/images/about_img.svg"

const HeroComponent = () => {
  return (
    //Hero Component
    <div className="bg-hero-pattern bg-cover text-white">
      {/*Div with Flex*/}
      <div className="md:m-16 m-6 md:mt-16 mt-16 md:flex justify-between">
        {/*Content @left*/}
        <div className="w-[100%] md:mr-16">
        <h2 className="text-xl font-bold">Global Piyasalarda</h2>
          <h2 className="text-xl font-bold">
            <span className="text-blue">500’den</span> Fazla Yatırım Aracı
          </h2>
          <p className="mt-8">
            Dünya standartlarındaki teknolojik altyapımızla Türk sermaye
            piyasalarının önemli yatırım kuruluşları arasında yer alıyoruz.
            Bugünün yatırım ihtiyaçlarına geleceğin çözümlerini şimdiden sunmayı
            hedefliyoruz.{" "}
          </p>
          <p className="mt-8">
            Son teknolojileri kullanan gelişmiş online Forex, VİOP ve Borsa
            işlem platformlarımız sayesinde müşterilerimiz tüm anlık finansal
            verilere, piyasa analizlerine ve ihtiyaç duyulan diğer bilgilere
            hızlı ve güvenli bir şekilde ulaşıp işlem yapabilmekte, yaratıcı
            mobil iletişim kolaylıklarıyla zaman ve mekan sınırlarından
            kurtulmaktadır.{" "}
          </p>
          <p className="mt-8">
            Bugün 39 Milyon TL. ödenmiş sermayemiz, performansımız ve dünya
            standartlarındaki teknolojik altyapımızla Türk sermaye piyasalarının
            önemli aktörlerinden biriyiz ve geleceği şekillendiren her
            gelişmenin yakın takipçisiyiz.
          </p>
        </div>
        {/*Content @left*/}

        {/*Content @right*/}
        <div className="w-[100%]">
           <img className="md:mt-0 mt-8" src={about_img} alt=""/>
        </div>
        {/*Content @right*/}
      </div>
      {/*Div with Flex*/}
    </div>
    //Hero Component
  );
};

export default HeroComponent;
