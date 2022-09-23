import React from "react";

const HeroSection = () => {
  return (
    //Main Container
    <div className=" text-white bg-hero-pattern bg-cover">
      {/*Div with Flex*/}
      <div className="md:flex">
        {/*Buttons @left*/}
        <div className="md:mt-16 mt-16 flex-col flex md:w-[35%] md:ml-16 md:mr-6 md:mx-0 mx-6">
          <button className="bg-gradient-to-r from-light to-dark rounded-md p-4 font-bold">
            GÜNLÜK STRATEJI BÜLTENI
          </button>
          <button className="bg-abt rounded-md p-4 mt-4 text-blue font-bold">
            GÜNLÜK STRATEJI BÜLTENI
          </button>
          <button className="bg-abt rounded-md p-4 mt-4 text-blue font-bold">
            GÜNLÜK STRATEJI BÜLTENI
          </button>
          <button className="bg-abt rounded-md p-4 mt-4 text-blue font-bold">
            GÜNLÜK STRATEJI BÜLTENI
          </button>
        </div>
        {/*Buttons @left*/}
        {/*Paragraph @right*/}
        <div className="bg-abt p-10 md:w-[100%] md:mt-16  md:mb-12 md:mr-16 rounded-md md:mx-0 mx-6 mt-12">
          <h2 className="text-blue text-xl font-semibold">Piyasalara Bakış</h2>
          <p className="mt-8">
            Güne pozitif seyirle başlayan BIST100 endeksi günün geri kalanında
            kar satışlarıyla geriledi ve haftanın son işlem gününü %0.7 kayıpla
            1,983 seviyesinden kapattı. İşlem hacmi 28.2 milyar TL seviyesinde
            gerçekleşti, endekse dahil olan 37 hisse değer kazandı, 61 hisse ise
            değer kaybetti. Dolar/TL kuru bu sabah saatlerinde 13.52
            seviyesinden işlem görürken, yurt dışı vadeli hisse piyasalarında
            ise pozitif bir seyir izleniyor.{" "}
          </p>
          <p className="mt-6">
            Geçtiğimiz haftaya satışlarla başlayan küresel hisse endeksleri
            hafta boyunca dalgalı seyretti ancak kapanışlar pozitif tarafta
            gerçekleşti. Özellikle ABD’de FED’in beklenenden daha sıkı para
            politikası uygulayabileceği düşüncesi teknoloji hisseleri üzerinde
            baskı yaratırken tahvil faizlerinde de yüksek seyir devam etti.
            Hafta içinde toplanan FED, Mart ayında ilk faiz artırımına işaret
            ederken, 3.çeyrek ile beraber bilanço küçültmesinin de
            başlayabileceğinin sinyalini verdi. Piyasa beklentileri FED’in 2022
            yılında 5 kez faiz artıracağı yönünde şekilleniyor. Öte yandan gelen
            4.çeyrek şirket bilançoları da hem sektör hem de ekonomi açısından
            fikir doğurabiliyor. Zira haftanın son işlem gününde açıklanan Apple
            finansalları endekslerdeki tepkiye liderlik etti. Şirketin
            beklentilerin üzerinde kar açıklamasının yanı sıra küresel tedarik
            sorununa karşı iyimser beklentilere sahip olması piyasalarda da
            olumlu karşılandı. Bu hafta Çin piyasaları kapalı olacak. Avrupa’da
            enflasyon, PMI verileri, ABD’de ise PMI ve tarımdışı istihdam raporu
            yayınlanacak. Ayrıca hafta içinde İngiltere ve Avrupa Merkez Bankası
            faiz kararları takip edilecek. İçeride ise BDDK bankacılık verileri,
            PMI endeksi ve Ocak ayı enflasyonu bekleniyor. Geçen hafta kısmen
            dinen Rusya-Ukrayna gerginliği de yakından takip edilecek.{" "}
          </p>
          <p className="mt-6">
            BIST100 endeksinin güne alımlarla başlamasını bekliyoruz. Kısa
            vadede oluşan sıkışma formasyonunun yukarı tamamlanabilmesi için
            2,000 seviyesinin aşılması gerektiğini düşünüyoruz. Bu aşamada 2,100
            ilk güçlü direnç konumuna gelirken 1,970-1,950 ve 1,900 destek
            seviyeleri olarak takip edilebilir. Yatırımcılara 1,950 zarar-kes
            seviyesi olmak üzere pozisyonlarını korumalarını öneriyoruz, 2,000
            seviyesi üzerinde ise pozisyonlar artırılabilir.
          </p>
        </div>
        {/*Paragraph @right*/}
      </div>
      {/*Div with Flex*/}
    </div>
    //Main Container
  );
};

export default HeroSection;
