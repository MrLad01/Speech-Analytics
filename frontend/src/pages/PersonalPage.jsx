import React from 'react';
import SideBar from "../components/SideBar"
import PpPieChart from '../components/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
// import PhoneCall from '@styled-icons/evaicons-solid/PhoneCall'

function PersonalPage(){
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="bg-[#030C1D] text-gray-100 flex flex-col md:w-64 lg:w-screen px-8 py-6 h-screen">
                    <div className="flex justify-between ">
                        <div>
                            <div>/personal page</div>
                            <h1>Personal Page</h1>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={faCircleUser} size='2x' />
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-6 items-center">
                            {/* <img src="" alt="" /> */}
                            <div>reload</div>
                            <div className="flex py-2 px-4  bg-[#1A1F37]">
                                <div className="px-3 py-1 hover:bg-[#0075FF] cursor-pointer">Week</div>
                                <div className="px-3 py-1 hover:bg-[#0075FF] cursor-pointer">Month</div>
                                <div className="px-3 py-1 hover:bg-[#0075FF] cursor-pointer">Year</div>
                            </div>
                        </div>
                        <div>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="flex items-center justify-around pr-20">
                        <div>
                            {/* // <FontAwesomeIcon icon="fa-solid fa-circle-user" /> */}
                            <FontAwesomeIcon icon={faCircleUser} size='8x' />
                        </div>
                        <div>
                            <div>Call icon</div>
                            <div>Incoming call</div>
                            <span>Last week</span>
                            <span>523</span>
                        </div>
                        <div>
                            <div>
                                {/* <PhoneCall /> */}
                            </div>
                            <div>Answered calls</div>
                            <span>Last week</span>
                            <span>523</span>
                        </div>
                        <div>
                            <div>Call icon</div>
                            <div>Abandoned call</div>
                            <span>Last week</span>
                            <span>523</span>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col justify-around">
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5">
                                <div>Overall duration of speech</div>
                                <span>Last week</span>
                                <span>21h</span>
                            </div>
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5">
                                <div>Average Speech Rate </div>
                                <span>Last week</span>
                                <span>43%</span>
                            </div>
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5">
                                <div>Overall Interruptions </div>
                                <span>Last week</span>
                                <span>08</span>
                            </div>
                        </div>
                        <div className="flex flex-col p-4 bg-[#1A1F37]">
                            <h1>Overall Speech Analytics</h1>
                            <div className="flex items-center justify-between">
                                <div className=' w-56 h-56 flex items-start'> 
                                    <PpPieChart />
                                </div>
                                <div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex gap-2">
                                            <div className='w-5 h-5 bg-[#636EFA]'></div>
                                            <span>75%</span>
                                        </div>
                                        <span>Client Positive</span>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex gap-2">
                                            <div className='w-5 h-5 bg-[#EF553B]'></div>
                                            <span>15%</span>
                                        </div>
                                        <span>Client Negative</span>
                                    </div>
                                    <div className="flex justify-between gap-5">
                                        <div className="flex gap-2">
                                            <div className='w-5 h-5 bg-[#00CC96]'></div>
                                            <span>10%</span>
                                        </div>
                                        <span>Client Neutral</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PersonalPage
