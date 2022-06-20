// import React from "react";


// const Footer = () => (
//   <div className="w-full flex md:justify-center justify-between items-center flex-col p-5 gradient-bg-footer">


//     <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

//     <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
//       <p className="text-white text-left text-xs">2022</p>
//       <p className="text-white text-right text-xs">All rights reserved</p>
//     </div>
//   </div>
// );

// export default Footer;

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faReact, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { Styledcomponents } from '@icons-pack/react-simple-icons';
import { SiSolidity,SiVite,SiMaterialui,SiTailwindcss,SiFirebase } from 'react-icons/si';
import { FaHardHat } from 'react-icons/fa';


const Footer = () => {
  return (
    <>
      <footer className="text-center text-white p-5  gradient-bg-footer">
        <section className="flex justify-between border-t-[1px] py-2 pb-5 ">

          <div className="mx-2 mt-5 pt-1">
            <p className="mt-2 text-base font-medium font-sora">Deinen Flores</p>
            {/* @media screen and (max-width:490px){
                  font-size: 14px;
                } */}

          </div>

          <div className="mt-5 text-lg">
            {/* @media screen and (max-width:490px){
    font-size: 14px;
    margin-top: 50px;
  } */}

            <span className="inline-flex items-center pt-4">
            <SiMaterialui style={{ marginRight: 2, marginLeft: 2 }} />
            <SiTailwindcss style={{ marginRight: 2, marginLeft: 2 }} />
            <SiVite style={{ marginRight: 2, marginLeft: 2 }} />
            <FontAwesomeIcon icon={faReact} style={{ marginRight: 2, marginLeft: 2 }}/>
            <SiSolidity style={{ marginRight: 2, marginLeft: 2 }}/>
            <SiFirebase  style={{ marginRight: 2, marginLeft: 2 }}/>
            <FaHardHat  style={{ marginRight: 2, marginLeft: 2 }}/>
            </span>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer
