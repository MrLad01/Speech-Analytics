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
                        <ul className="flex flex-col items-start">
                            <li className="mb-2">
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    <FontAwesomeIcon icon={faGauge} />
                                    Personal Page
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    <FontAwesomeIcon icon={faHouseChimney} />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    Leaderboard
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    <FontAwesomeIcon icon={faSignal} />
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    <FontAwesomeIcon icon={faGear} />
                                    Settings
                                </Link>
                            </li>
                            {/* Add more sidebar links as needed */}
                        </ul>
                    </nav>

                </div>
                <div>
                    <Link className="text-gray-300 hover:text-white">
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                         Logout 
                    </Link>
                </div>
            </div>
        </>
    )
}

export default SideBar