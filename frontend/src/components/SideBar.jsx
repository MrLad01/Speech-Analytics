import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faGear, faSignal, faHouseChimney, faGauge } from '@fortawesome/free-solid-svg-icons';

function SideBar(){
    return (
        <>
            <div className="bg-[#030C1D] text-gray-100 flex flex-col md:w-64 lg:w-68 px-4 py-6 h-screen items-center justify-between border-r border-gray-50">
                <div className="flex flex-col gap-16 justify-between">
                    <h2 className="text-xl font-bold mb-4">SpeechAnalytics</h2>
                    <nav className="">
                        <ul className="flex flex-col items-start border-opacity-5 border-y border-slate-100">
                            <li className="mb-2">
                                <Link to="/" className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                                    <div className="p-2 bg-[#1A1F37] rounded-3xl">
                                        <FontAwesomeIcon icon={faGauge} />
                                    </div>
                                    <span>
                                        Personal Page
                                    </span>   
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                                    <div className="p-2 bg-[#1A1F37] rounded-3xl">
                                        <FontAwesomeIcon icon={faHouseChimney} />
                                    </div>
                                    <span>
                                        Dashboard
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                                    <div className="p-2 bg-[#1A1F37] rounded-3xl">
                                        <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15 21H9M15 21V12.6C15 12.4409 14.9368 12.2883 14.8243 12.1758C14.7117 12.0632 14.5591 12 14.4 12H9.6C9.44087 12 9.28826 12.0632 9.17574 12.1758C9.06321 12.2883 9 12.4409 9 12.6V21M15 21H20.4C20.5591 21 20.7117 20.9368 20.8243 20.8243C20.9368 20.7118 21 20.5591 21 20.4V18.1C21 17.9409 20.9368 17.7883 20.8243 17.6758C20.7117 17.5632 20.5591 17.5 20.4 17.5H15.6C15.4409 17.5 15.2883 17.5632 15.1757 17.6758C15.0632 17.7883 15 17.9409 15 18.1V21ZM9 21V16.1C9 15.9409 8.93679 15.7883 8.82426 15.6758C8.71174 15.5632 8.55913 15.5 8.4 15.5H3.6C3.44087 15.5 3.28826 15.5632 3.17574 15.6758C3.06321 15.7883 3 15.9409 3 16.1V20.4C3 20.5591 3.06321 20.7118 3.17574 20.8243C3.28826 20.9368 3.44087 21 3.6 21H9ZM10.806 5.11302L11.715 3.18602C11.7395 3.13093 11.7795 3.08413 11.8301 3.05129C11.8807 3.01845 11.9397 3.00098 12 3.00098C12.0603 3.00098 12.1193 3.01845 12.1699 3.05129C12.2205 3.08413 12.2605 3.13093 12.285 3.18602L13.195 5.11302L15.227 5.42402C15.488 5.46402 15.592 5.80002 15.403 5.99202L13.933 7.49202L14.28 9.61002C14.324 9.88202 14.052 10.09 13.818 9.96102L12 8.96102L10.182 9.96102C9.949 10.089 9.676 9.88202 9.72 9.61002L10.067 7.49202L8.597 5.99202C8.407 5.80002 8.512 5.46402 8.772 5.42402L10.806 5.11302Z" stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <span>
                                         Leaderboard
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                                    <div className="p-2 bg-[#1A1F37] rounded-3xl">
                                        <FontAwesomeIcon icon={faSignal} />
                                    </div>
                                    <span>
                                        Analytics
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                                    <div className="p-2 bg-[#1A1F37] rounded-3xl">
                                        <FontAwesomeIcon icon={faGear} />
                                    </div>
                                    <span>
                                        Settings
                                    </span>
                                </Link>
                            </li>
                            {/* Add more sidebar links as needed */}
                        </ul>
                    </nav>

                </div>
                <div>
                    <Link className="text-gray-300 hover:text-white flex justify-around gap-3 items-center">
                      {/* <FontAwesomeIcon icon={faArrowRightFromBracket} /> */}
                      <div className="p-2 bg-[#1A1F37] rounded-3xl">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 18C1.45 18 0.979333 17.8043 0.588 17.413C0.196667 17.0217 0.000666667 16.5507 0 16V2C0 1.45 0.196 0.979333 0.588 0.588C0.98 0.196667 1.45067 0.000666667 2 0H9V2H2V16H9V18H2ZM13 14L11.625 12.55L14.175 10H6V8H14.175L11.625 5.45L13 4L18 9L13 14Z" fill="#FFFFFF"/>
                        </svg>
                      </div>
                      <span>
                         Logout 
                      </span>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideBar