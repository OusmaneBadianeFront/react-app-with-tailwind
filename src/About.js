import React, { Component } from 'react'
import { FiSettings} from "react-icons/fi";
import { GiUpgrade} from "react-icons/gi";
import { HiOutlineCode} from "react-icons/hi"
import { AiOutlineSafetyCertificate} from "react-icons/ai"






function About(){
    return(
        <section className=" font-bold dark:bg-blue-900 pb-10 ">
           
        <div className="py-8 px-4  max-w-screen-xl text-center  container mx-auto space-y-5 pb-48 w-screen h-screen pt-40 border-l-dotted  border-l-2  border-l-gray-100">
            <p className="text-blue-400 text-xs  text-left">Offres et Services </p>
            <h2 className="text-black font-bold text-3xl text-left pb-10   ">Une vision des paiements et de la finance centrée sur la technologie</h2>
            <div className="cards flex flex-col space-y-5 lg:flex-row lg:space-x-10 lg:space-y-0">
                {/* First  */}
                <div className="flex flex-col space-y-5 hover:shadow-2xl  ">
                    <a  className='animate-spin h-5 w-5 mr-3'> <FiSettings style={{color: '#7AACFB ', fontSize: '30px'}}/></a>
                    <h5 className=" text-sm font-bold text-left  ">Une Infrastructure de bout en bout</h5>
                    <p className=" mx-auto container text-sm text-gray-600 text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>

                </div>
                {/* Second */}
                <div className="flex flex-col space-y-5 hover:shadow-2xl ">
               <a> <GiUpgrade style={{color: '#7AACFB ', fontSize: '40px'}} className="animate-bounce h-7 w-7  rotate-90 opacity-75"/></a>
                    <h5 className=" text-sm font-bold text-left ">Une plateforme évolutive</h5>
                    <p className=" mx-auto container text-sm text-gray-600 text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>

                </div>

                {/* Third */}
                <div className="flex flex-col space-y-5 hover:shadow-2xl">
                   <AiOutlineSafetyCertificate  style={{color: '#7AACFB ', fontSize: '40px'}}/>
                    <h5 className=" text-sm font-bold text-left ">Une fiabilité éprouvée</h5>
                    <p className=" mx-auto container text-sm text-gray-600 text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>

                </div>

                {/* Fourth */}
                <div className="flex flex-col space-y-5 hover:shadow-2xl">
                 <HiOutlineCode style={{color: '#7AACFB ', fontSize: '40px'}}/>                    <h5 className=" text-sm font-bold text-left ">Des optimisations intelligentes</h5>
                    <p className=" mx-auto container text-sm text-gray-600 text-left">Nous couvrons et optimisons tous les niveaux de l'infrastructure financière, de l'intégration directe avec les banques et réseaux de cartes bancaires aux flux de règlement dans le navigateur.</p>

                </div>
            </div>
        </div>
        </section>
    )
}

export default About;