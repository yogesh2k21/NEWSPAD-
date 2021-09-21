import React, { Component } from "react";
import { Link } from "react-router-dom";
export class NavBar extends Component {

render() {
return (
<>
    <div className="w-full sticky top-0 shadow-xl text-gray-700 bg-white border dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div
            className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
                <a href="/"
                    className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                    NEWSPAD
                </a>
            </div>
            <nav style={{padding:"1.0rem"}} className="flex-col overflow-x-auto flex-grow pb-4 md:pb-0 md:flex md:justify-start md:flex-row">
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/">
                    General</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/entertainment">
                    Entertainment</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/technology">
                    Technology</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/business">
                    Business</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/health">
                    Health</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/science">
                    Science</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/sports">
                    Sports</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/contact">
                    Contact</Link>
                <Link className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg md:mt-0 md:ml-4 hover:text-gray-900 hover:bg-gray-200" to="/about">
                    About</Link>
            </nav>
        </div>
    </div>
</>
);
}
}

export default NavBar;