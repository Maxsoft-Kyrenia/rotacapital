import React from 'react'

const HeroSection = () => {
  return (
      //Main Container
    <div>
       {/*Div with Header Tagline and Form*/}
          <div className='mt-10 md:mx-16 mx-2 md:flex text-white justify-between pb-20'>

              {/*Section with Header Tagline @left*/}
              <section className='md:mt-24 mt-12 w-[100%] ml-4 mr-0'>
                 <h2 className='text-2xl font-bold md:w-fit w-[50%]'>Dünya Piyasalarina Açilan Kapiyiz!</h2>
                 <p className=' mt-3 md:w-[80%] w-[90%] '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem</p>
                  {/*Button*/}
                <button className=' mt-6 p-5 px-10 rounded rounded-r-full bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl'>Hesap Oluštur</button>
                 {/*Button*/}
              </section>
                {/*Section with Header Tagline @left*/}
               
                 {/*Section with Form @right*/}
              <section className='w-[100%] mr-0 flex items-center justify-center md:mt-0 mt-20'>
                 
                 {/*FORM*/}
                 <section className='bg-primary opacity-95 p-4 rounded-md w-[80%] flex flex-col'>
                     <input className='bg-input-bg p-4 rounded-md' placeholder='Adiniz Soyadiniz'/>
                     <input className='bg-input-bg p-4 mt-3 rounded-md' placeholder='E-posta'/>
                     <input className='bg-input-bg p-4 mt-3 rounded-md' placeholder='Telefon'/>

                     <p className='md:text-base text-sm mt-4'>Denemeye başla butonuna tıklayarak GCM'den elektronik ileti almayı, kullanım koşullarını, kişisel verilerin işlenmesine ilişkin aydınlatma metni ve izin Formu'nu kabul ediyorum.</p>

                       {/*Button*/}
                        <button className=' mt-6 text-center justify-center p-5 px-10 rounded rounded-r-full bg-gradient-to-r from-light to-dark hover:bg-gradient-to-l font-semibold mr-3 text-xl'>Denemeye başla</button>
                       {/*Button*/}

                 </section>
                  {/*FORM*/}

              </section>
               {/*Section with Form @right*/}

          </div>
        {/*Div with Header Tagline and Form*/}
    </div>
     //Main Container
  )
}

export default HeroSection