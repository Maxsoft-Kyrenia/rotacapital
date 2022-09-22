import React from "react";
import money from "../../assets/images/money_img.svg";

const Sectionthree = () => {
  return (
    //Main Container
    <div>
      {/*Div with two sections*/}
      <div className="md:flex md:mx-20 mx-10 md:mt-16 mt-10">
        {/*Image Section @left*/}
        <div className="w-[100%]">
          <img className="md:px-16" src={money} alt="" />
        </div>
        {/*Image Section @left*/}
        {/*Text Section @right*/}
        <div className="text-white w-[100%] md:mt-16">
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
        {/*Text Section @right*/}
      </div>
      {/*Div with two sections*/}
    </div>
    //Main Container
  );
};

export default Sectionthree;
