import Link from "next/link";
import profileIcon from "../../assets/svg/profile.svg";



const Nav = () => {
    return (
        <nav className="navbar navbar-default new-navbar">
            <div className="container-fluid">
                <div className=" navbar-header new-navbar-header custom-width">
                    <div className="nav-custom">
              
                    <div><Link href="/"><a className = "color-white">Hotel App</a></Link></div>
                    <div>
                    <ul className="nav navbar-nav navbar-right new-navbar-right">
                        <li className="dropdown new-navbar-right-account">
                            <span className="user-avatar">
                            <div className="user-avatar__icon">
                               <img src={profileIcon}/>
                            </div>
                        </span>
                        
                        <button className="dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                            <span className="navbar-account-text">Account</span><span className="caret"></span>
                        </button>
                     </li>
                    </ul>

                   </div>
                    </div>        
                </div>   
            </div>
           
        </nav>
    )
}

export default Nav
