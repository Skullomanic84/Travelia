import { TfiSearch } from "react-icons/tfi"
import { MdOutlinePhone } from "react-icons/md";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className={"navbar_wrapper"}>
        <div className="navbar_logo">
            <a href="http://">Travelia</a>
        </div>

        <ul>
            <li>
                <a href="http://">Home</a>
            </li>
            <li>
                <a href="http://">Trips</a>
            </li>
            <li>
                <a href="http://">Destination</a>
            </li>
            <li>
                <a href="http://">Searches</a>
            </li>
            <li>
                <a href="http://">About</a>
            </li>
            <li>
                <a href="http://">Popular Destination</a>
            </li>
            <li>
                <a href="http://">Contact</a>
            </li>
        </ul>

        <div className="nav_btns">
            <div className="search_wrapper">
                <span><TfiSearch /></span>
                <input type="text" placeholder="Search places..." />
            </div>
            <div className="callback_btn">
                <span><MdOutlinePhone /></span>
                <p>+27 11 458 9089 <small>Call your Agent</small></p>
            </div>
            <CiMenuFries />
        </div>
    </div>
  )
}

export default Navbar