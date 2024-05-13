import React from 'react';
import SideBar from "../components/SideBar"
import PpPieChart from '../components/PieChart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faRotateRight, faPhone, faPhoneVolume, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import user from '../assets/Male User.jpg'
// import PhoneCall from '@styled-icons/evaicons-solid/PhoneCall'

function PersonalPage(){
    return (
        <>
            <div className="flex">
                <SideBar />
                <div className="bg-[#030C1D] text-gray-100 flex flex-col md:w-64 lg:w-screen px-8 py-6 h-screen">
                    <div className="flex justify-between ">
                        <div className='flex flex-col gap-1'>
                            <div className='text-xs flex gap-1'>
                                <FontAwesomeIcon icon={faHouseChimney} />
                                <span>
                                    / personal page
                                </span>
                            </div>
                            <h1>Personal Page</h1>
                        </div>
                        <div className='bg-[#030C1D]'>
                            <FontAwesomeIcon icon={faCircleUser} size='2x' />
                            {/* <img src={user} alt="User Icon" className='bg-[#030C1D] mix-blend-plus-darker' /> */}
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-b border-slate-800 py-3">
                        <div className="flex gap-6 items-center">
                            <div className='px-2 py-1 bg-[#1A1F37] rounded-3xl cursor-pointer'>
                             <FontAwesomeIcon icon={faRotateRight} />
                            </div>
                            <div className="flex py-2 px-2 bg-[#1A1F37] rounded-3xl">
                                <div className="px-5 py-1 hover:bg-[#0075FF] cursor-pointer rounded-2xl text-sm">Week</div>
                                <div className="px-5 py-1 hover:bg-[#0075FF] cursor-pointer rounded-2xl text-sm">Month</div>
                                <div className="px-5 py-1 hover:bg-[#0075FF] cursor-pointer rounded-2xl text-sm">Year</div>
                            </div>
                        </div>
                        <div>
                            <input type="date" name="" id="" placeholder='hello' />
                        </div>
                    </div>
                    <div className="flex items-center justify-around pr-20 py-5">
                        <div>
                            {/* // <FontAwesomeIcon icon="fa-solid fa-circle-user" /> */}
                            <FontAwesomeIcon icon={faCircleUser} size='6x' />
                        </div>
                        <div className='flex flex-col'>
                            <div className='px-2 py-1 bg-[#1A1F37] rounded-3xl'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>Incoming call</div>
                            <span>Last week</span>
                            <span className="text-2xl font-semibold">523</span>
                        </div>
                        <div className='flex flex-col'>
                            <div className='px-2 py-1 bg-[#1A1F37] rounded-3xl'>
                                {/* <PhoneCall /> */}
                                <FontAwesomeIcon icon={faPhoneVolume} />
                            </div>
                            <div>Answered calls</div>
                            <span>Last week</span>
                            <span className="text-2xl font-semibold">523</span>
                        </div>
                        <div className='flex flex-col'>
                            <div className='px-2 py-1 bg-[#1A1F37] rounded-3xl'>
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.3327 4.66669L18.666 9.33335M18.666 4.66669L23.3327 9.33335" stroke="#FFFFFF" stroke-width="0.875" stroke-linecap="round"/>
                                    <path d="M18.1485 16.9727L17.6177 17.5327C17.6177 17.5327 16.3542 18.8615 12.9067 15.232C9.45917 11.6025 10.7227 10.2737 10.7227 10.2737L11.0575 9.92016C11.8812 9.05216 11.9593 7.65916 11.2395 6.64183L9.7695 4.56166C8.87816 3.30166 7.15733 3.136 6.1365 4.2105L4.306 6.13666C3.80083 6.66983 3.4625 7.35933 3.50333 8.12583C3.60833 10.0858 4.446 14.301 9.11733 19.2208C14.0722 24.4358 18.7213 24.6435 20.6218 24.4557C21.2238 24.3973 21.7465 24.0718 22.1677 23.6285L23.8243 21.8832C24.9443 20.7048 24.6293 18.6865 23.1967 17.8628L20.9683 16.5795C20.028 16.0393 18.8835 16.198 18.1485 16.9715" fill="#FFFFFF"/>
                                </svg>
                            </div>
                            <div>Abandoned call</div>
                            <span>Last week</span>
                            <span className="text-2xl font-semibold">523</span>
                        </div>
                    </div>
                    <div className="flex gap-10">
                        <div className="flex flex-col justify-around gap-3">
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5 rounded-lg">
                                <div>Overall duration of speech</div>
                                <span className='text-xs'>Last week</span>
                                <span className='text-4xl mt-6 text-center'>21h</span>
                            </div>
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5 rounded-lg">
                                <div>Average Speech Rate </div>
                                <span className='text-xs'>Last week</span>
                                <span className='text-4xl mt-6 text-center'>43%</span>
                            </div>
                            <div className="flex flex-col bg-[#1A1F37] py-3 px-5 rounded-lg">
                                <div>Overall Interruptions </div>
                                <span className='text-xs'>Last week</span>
                                <span className='text-4xl mt-6 text-center'>08</span>
                            </div>
                        </div>
                        <div className="flex flex-col p-4 pr-16 pb-10 bg-[#1A1F37] rounded-lg">
                            <h1>Overall Speech Analytics</h1>
                            <div className="flex items-center justify-between gap-16">
                                <div className=' w-[18rem] h-[18rem] flex items-start'> 
                                    <PpPieChart />
                                </div>
                                <div className='flex flex-col justify-around items-start gap-5'>
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
