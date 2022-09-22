import React from 'react'
import mail_icon from '../assets/icon/mail_icon.svg'
import phone_icon from '../assets/icon/phone_icon.svg'

const Info = () => {
  return (
      //Main Cntainer
    <div className='md:block hidden pt-2'>
       {/*Div with margin and curved top and bottom right*/}
       <div className='bg-primary opacity-95 mt-2 mx-16 flex justify-between items-center p-3 border-2 border-border text-white text-base rounded-r-full rounded'>
           
           {/*Text Section @Left hand side*/}
          <section className=''>
              <p className=''>Lisanslı ve Geniş Yetkili Aracı Kurum - Lisans No: G-039 (398)</p>
          </section>
          {/*Text Section @Left hand side*/}

           {/*Mail & Phone Section @Right hand side*/}
               <section className='flex'>
                     <h2 className='mr-6 flex items-center'> <span className='mr-2'> <img className='' src={mail_icon} alt=''/> </span> design@monegon.com</h2>
                     <h2 className='mr-2 flex items-center'> <span className='mr-2'> <img className='' src={phone_icon} alt=''/> </span> +90 556 887 44 15</h2>
               </section>
            {/*Mail & Phone Section @Right hand side*/}

       </div>
         {/*Div with margin and curved top and bottom right*/}
    </div>
     //Main Cntainer
  )
}

export default Info