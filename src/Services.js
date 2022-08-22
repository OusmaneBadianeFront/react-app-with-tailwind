import React, { Component } from 'react'
import megacreator from './Services.svg'

function Services( ){
return(
    <section className=' bg-navy pt-14'>
         <div className="py-8 px-4  flex flex-col md:flex-row max-w-screen-xl text-center  container mx-auto  pb-48 w-screen h-screen">
          {/* fisrt Div */}
          <div className='flex flex-col md:w-1/2 space-y-10 '>
                <p className="text-lightBlue text-sm  text-left">Pourquoi e-Revolute Consulting ?</p>
                <h2 className="text-white font-bold text-4xl text-left ">Des API aussi performantes qu’intuitives</h2>
                <p className='text-lightGrey text-base text-left'>
                    Nous concevons des solutions optimisées pour éviter à vos équipes de jongler entre différents systèmes ou de passer des mois à intégrer des fonctionnalités de paiement.
                </p>
                <button type="button" class="text-black inline-block px-6 py-2.5 bg-lightBlue font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-1/2">Lire la documentation</button>
                {/* Divs  */}
                <div className='flex flex-col lg:flex-row '>
                    {/* Left Div */}
                     <div className="flex flex-col space-y-5 hover:shadow-2xl  ">
                        {/* <a  className='animate-spin h-5 w-5 mr-3'> <FiSettings style={{color: '#7AACFB ', fontSize: '30px'}}/></a> */}
                        <h5 className=" text-sm font-bold text-left  text-white ">Une Infrastructure de bout en bout</h5>
                        <p className=" mx-auto container text-sm text-lightGrey text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>
                    </div>
                     {/* Right Div */}
                     <div className="flex flex-col space-y-5 hover:shadow-2xl  ">
                        {/* <a  className='animate-spin h-5 w-5 mr-3'> <FiSettings style={{color: '#7AACFB ', fontSize: '30px'}}/></a> */}
                        <h5 className=" text-sm font-bold text-left  text-white  ">Une Infrastructure de bout en bout</h5>
                        <p className=" mx-auto container text-sm text-lightGrey text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>
                    </div>
                </div>
         </div>
          {/* Second Div */}
          <div className='flex  w-1/2'>
           <img src={megacreator}/>
          </div>
        </div>
         
        
</section>
)
    
   
}

export default Services;