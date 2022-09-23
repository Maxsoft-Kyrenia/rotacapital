import React from "react";
import demo from "../../assets/images/demo_userimg.png";

const Index = () => {
  return (
    //Main Container
    <div className="md:m-16 m-6 bg-hero-pattern bg-cover text-white">
      {/*Content*/}
      <div>
        <h2 className="text-xl font-bold">Contact Details</h2>
        <p>
          You can contact us about customer or corporate affairs at any time.
        </p>

        <div className="md:flex mt-10 justify-between">

          <section className="flex  items-center bg-abt p-3 rounded-lg w-[100%] md:mr-12 h-fit ">
            <span className="p-3 bg-white rounded-full mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25.988"
                height="25.988"
                viewBox="0 0 25.988 25.988"
              >
                <path
                  id="_x30_8.Whatsapp"
                  d="M22.994,10A13,13,0,0,0,12.469,30.628l-1.787,4.71,5.165-1.494a12.856,12.856,0,0,0,7.147,2.144,12.994,12.994,0,0,0,0-25.988Zm6.919,18.387-1.4,1.364c-1.462,1.462-5.328-.13-8.739-3.573C16.367,22.767,14.84,18.9,16.2,17.472l1.4-1.4a1.413,1.413,0,0,1,1.949,0L21.6,18.121a1.353,1.353,0,0,1-.52,2.241,1.315,1.315,0,0,0-.877,1.592A6.239,6.239,0,0,0,24,25.723a1.357,1.357,0,0,0,1.592-.877,1.353,1.353,0,0,1,2.241-.52l2.047,2.047A1.531,1.531,0,0,1,29.914,28.387Z"
                  transform="translate(-10 -10)"
                  fill="#3ba7e8"
                />
              </svg>
            </span>
            <p className="text-xl font-semibold">+ 90 850 459 68 54</p>
          </section>

          <section className="flex  items-center bg-abt p-3 rounded-lg w-[100%] md:mr-12 md:mt-0 mt-10 h-fit">
            <span className="p-3 bg-white rounded-full mr-5">
              <svg
                id="email"
                xmlns="http://www.w3.org/2000/svg"
                width="28.822"
                height="21.234"
                viewBox="0 0 28.822 21.234"
              >
                <g
                  id="Group_39"
                  data-name="Group 39"
                  transform="translate(0 5.989)"
                >
                  <g
                    id="Group_38"
                    data-name="Group 38"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_67"
                      data-name="Path 67"
                      d="M15.245,155.469a1.638,1.638,0,0,1-1.7,0L0,147.2v10.991a4.255,4.255,0,0,0,4.254,4.254H24.569a4.255,4.255,0,0,0,4.254-4.254V147.2Z"
                      transform="translate(0 -147.2)"
                      fill="#3ba7e8"
                    />
                  </g>
                </g>
                <g
                  id="Group_41"
                  data-name="Group 41"
                  transform="translate(0.136 0)"
                >
                  <g id="Group_40" data-name="Group 40">
                    <path
                      id="Path_68"
                      data-name="Path 68"
                      d="M26.481,57.088H6.165a4.228,4.228,0,0,0-4.117,3.335L16.34,69.134,30.6,60.423A4.228,4.228,0,0,0,26.481,57.088Z"
                      transform="translate(-2.048 -57.088)"
                      fill="#3ba7e8"
                    />
                  </g>
                </g>
              </svg>
            </span>
            <p className="text-xl font-semibold">contact@gmail.com</p>
          </section>

          <section className="flex  items-center bg-abt p-3 rounded-lg w-[100%]  md:mt-0 mt-10 h-fit">
            <span className="p-3 bg-white rounded-full mr-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22.726"
                height="25.857"
                viewBox="0 0 22.726 25.857"
              >
                <g id="location" transform="translate(-31)">
                  <g
                    id="Group_51"
                    data-name="Group 51"
                    transform="translate(34.03)"
                  >
                    <g
                      id="Group_50"
                      data-name="Group 50"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_96"
                        data-name="Path 96"
                        d="M99.333,0a8.329,8.329,0,0,0-6.773,13.182L98.7,22.756a.757.757,0,0,0,1.275,0l6.162-9.607A8.333,8.333,0,0,0,99.333,0Zm0,12.121a3.788,3.788,0,1,1,3.788-3.788A3.792,3.792,0,0,1,99.333,12.121Z"
                        transform="translate(-91)"
                        fill="#3ba7e8"
                      />
                    </g>
                  </g>
                  <g
                    id="Group_53"
                    data-name="Group 53"
                    transform="translate(31 17.408)"
                  >
                    <g
                      id="Group_52"
                      data-name="Group 52"
                      transform="translate(0)"
                    >
                      <path
                        id="Path_97"
                        data-name="Path 97"
                        d="M48.285,344.7l-3.815,5.964a2.5,2.5,0,0,1-4.216,0L36.434,344.7c-3.362.777-5.434,2.2-5.434,3.9,0,2.952,5.855,4.545,11.363,4.545s11.363-1.593,11.363-4.545C53.726,346.9,51.651,345.472,48.285,344.7Z"
                        transform="translate(-31 -344.695)"
                        fill="#3ba7e8"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span>
              <h2 className="text-blue font-semibold text-xl">Headquarters</h2>
              <p className="text-sm font-medium">
                Suite 15, 1st Floor, Oliaji Trade Centre, Francis Rachel Street,
                Victoria, Mahe, P.O. Box 1004,
              </p>
            </span>
          </section>
        </div>

        <div className="flex flex-col justify-center items-center text-center md:mx-52 mt-12">
          <h2 className="text-3xl font-bold">
            JOIN WORLD BRANDS with{" "}
            <span className="text-blue">RotaCapital!</span>
          </h2>
          <p className="mt-2 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/*Section with Form @down*/}
          <section className="w-[100%] mr-0 flex items-center justify-center md:mt-0 pt-10">
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
          {/*Section with Form @down*/}
        </div>
      </div>
      {/*Content*/}
    </div>
    //Main Container
  );
};

export default Index;
