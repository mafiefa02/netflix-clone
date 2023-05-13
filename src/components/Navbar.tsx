import invertedTriangle from "../assets/inverted-triangle.svg";
import netflixLogo from "../assets/Netflix_2015_logo.svg";

function Navbar() {
    return (
        <nav className="sticky top-0">
            <div className="flex justify-between items-center py-[18px] px-16">
                <div className="flex justify-center items-center cursor-pointer">
                    <img className="h-6" src={netflixLogo} alt="Netflix Logo" />
                </div>
                <div className="flex-1 justify-start px-10 items-center">
                    <a href="#" className="text-sm font-bold hover:text-neutral-400 pointer-events-none transition-color duration-500 px-3 py-2 rounded">Home</a>
                    <a href="#" className="text-sm font-normal hover:text-neutral-400 transition-color duration-500 px-3 py-2 rounded">TV Shows</a>
                    <a href="#" className="text-sm font-normal hover:text-neutral-400 transition-color duration-500 px-3 py-2 rounded">Movies</a>
                    <a href="#" className="text-sm font-normal hover:text-neutral-400 transition-color duration-500 px-3 py-2 rounded">New & Popular</a>
                    <a href="#" className="text-sm font-normal hover:text-neutral-400 transition-color duration-500 px-3 py-2 rounded">My List</a>
                    <a href="#" className="text-sm font-normal hover:text-neutral-400 transition-color duration-500 px-3 py-2 rounded">Browse by Languages</a>
                </div>
                <div className="flex items-center cursor-pointer">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="search-icon mx-3" data-name="Search">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C14 14.3137 11.3137 17 8 17C4.68629 17 2 14.3137 2 11C2 7.68629 4.68629 5 8 5C11.3137 5 14 7.68629 14 11ZM14.3623 15.8506C12.9006 17.7649 10.5945 19 8 19C3.58172 19 0 15.4183 0 11C0 6.58172 3.58172 3 8 3C12.4183 3 16 6.58172 16 11C16 12.1076 15.7749 13.1626 15.368 14.1218L24.0022 19.1352L22.9979 20.8648L14.3623 15.8506Z" fill="currentColor"></path>
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard mx-3" data-name="Notification">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13 4.07092C16.3922 4.55624 18.9998 7.4736 18.9998 11V15.2538C20.0486 15.3307 21.0848 15.4245 22.107 15.5347L21.8926 17.5232C18.7219 17.1813 15.409 17 11.9998 17C8.59056 17 5.27764 17.1813 2.10699 17.5232L1.89258 15.5347C2.91473 15.4245 3.95095 15.3307 4.99978 15.2538V11C4.99978 7.47345 7.6076 4.55599 11 4.07086V2L13 2V4.07092ZM16.9998 15.1287V11C16.9998 8.23858 14.7612 6 11.9998 6C9.23836 6 6.99978 8.23858 6.99978 11V15.1287C8.64041 15.0437 10.3089 15 11.9998 15C13.6907 15 15.3591 15.0437 16.9998 15.1287ZM8.62568 19.3712C8.6621 20.5173 10.1509 22 11.9993 22C13.8477 22 15.3365 20.5173 15.373 19.3712C15.38 19.1489 15.1756 19 14.9531 19H9.04555C8.82308 19 8.61862 19.1489 8.62568 19.3712Z" fill="currentColor"></path>
                    </svg>
                    <div className="overflow-hidden">
                        <img className="profile-icon mx-3" src="http://occ.a.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY20DrC9-11ewwAs6nfEgb1vrORxRPP9IGmlW1WtKuaLIz8VxCx5NryzDK3_ez064IsBGdXjVUT59G5IRuFdqZlCJCneepU.png?r=229" alt=""></img>
                    </div>
                    <img className="triangle-icon h-[0.3rem] w-[0.5rem] hover:rotate-180 transition-transform" src={invertedTriangle} alt=""></img>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;