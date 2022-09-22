import React from 'react'
import six from "../../assets/images/six_img.svg";

const Sectionsix = () => {
  return (
    //Main Container
    <div>
      {/*Div with two sections*/}
      <div className="md:flex md:mx-20 md:mt-16 mt-10 mx-10">
        {/*Text Section @left*/}
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
        {/*Text Section @left*/}
           {/*Image Section @right*/}
           <div className="w-[100%]">
          <img className="md:px-16" src={six} alt="" />
        </div>
        {/*Image Section @right*/}
      </div>
      {/*Div with two sections*/}
    </div>
    //Main Container
  )
}

export default Sectionsix