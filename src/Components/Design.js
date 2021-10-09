import React, {useState} from "react";
import  {Link}from "react-router-dom";
import ReactPlayer from 'react-player'
import myClip from '../Clips/QCM-Design Sampler.mp4'
import {useHistory} from "react-router-dom";

const LandingPage = ({}) => {
    const history = useHistory()

    let [hidden,setHidden]=useState(true)

    const handelPause=()=>{

        setHidden(false)

    }

    return (


        <div className=" bg-purple-100 flex relative z-20 items-center">
            <div className="container mx-auto px-6 flex flex-col justify-between items-center relative py-8">
                <div className="flex flex-col">
                    <h1 className="font-normal w-full uppercase text-center text-4xl sm:text-5xl dark:text-white text-gray-800">
                        Qrious Creative Media,Design
                    </h1>
                    <h2 className="font-light max-w-2xl mx-auto w-full text-xl dark:text-white text-gray-500 text-center py-8">

                    </h2>
                    <div className="flex items-center justify-center mt-4">
                        <a href="#" hidden={hidden} onClick={()=>{history.push('/LandingPage')}}
                           className="uppercase py-2 px-4 bg-gray-800 border-2 border-transparent text-white text-md mr-4 hover:bg-gray-900">
                            Home
                        </a>
                        <a href="#" hidden={hidden} onClick={()=>{history.push('/Photography')}}
                           className="uppercase py-2 px-4 bg-transparent border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
                            Photography
                        </a>
                    </div>
                </div>
                <div className="block justify-between mt-8">
                    <video controls  width="640" height="360" autoPlay={true} muted onPause={handelPause} className={'rounded-xl border-solid border-gray-400 border-4'}>
                        <source src={myClip}  type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>

    );
};

export default LandingPage;
