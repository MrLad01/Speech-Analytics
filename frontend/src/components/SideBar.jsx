import { Link } from "react-router-dom"

function SideBar(){
    return (
        <>
            <div className="bg-[#030C1D] text-gray-100 flex flex-col md:w-64 lg:w-68 px-4 py-6 h-screen items-center justify-between border-r border-gray-50">
                <div className="flex flex-col gap-16 justify-between">
                    <h2 className="text-xl font-bold mb-4">SpeechAnalytics</h2>
                    <nav className="">
                        <ul className="flex flex-col items-center">
                            <li className="mb-2">
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    Personal Page
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
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
                                    Analytics
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className="text-gray-300 hover:text-white">
                                    Settings
                                </Link>
                            </li>
                            {/* Add more sidebar links as needed */}
                        </ul>
                    </nav>

                </div>
                <div>
                    <Link className="text-gray-300 hover:text-white"> Logout </Link>
                </div>
            </div>
        </>
    )
}

export default SideBar