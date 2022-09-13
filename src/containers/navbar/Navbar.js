import React, { useState} from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { BiMenu } from 'react-icons/bi';
import { AiFillCloseSquare } from 'react-icons/ai';
import { GrFacebook, GrInstagram } from 'react-icons/gr'
import './navbar.css'
import logo from '../../assets/wood-logo-without-bg.png';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => (
        <>
            <p ><a href="#about" onClick={() => setToggleMenu(false)}>Bemutatkozás</a></p>
            <p><a href="#blog" onClick={() => setToggleMenu(false)}>Blog</a></p>
            <p><a href="#gallery" onClick={() => setToggleMenu(false)}>Galéria</a></p>            
            <p><a href="#contact" onClick={() => setToggleMenu(false)}>Elérhetőség</a></p>
        </>
    )

    const Social = () => (
        <>
            <p><a href='#' className='navbar-social_icon'><BsFacebook /></a></p> 
            <p><a href='#' className='navbar-social_icon'><BsInstagram /></a></p>
        </>
    )

    const SocialMenu = () => (
        <>
            <p><a href=""></a><GrFacebook/></p>
            <p><a href=""></a><GrInstagram/></p>
        </>
    )

    const noWebShop = () =>  {
        return(
            alert('A Webáruházunk sajnos még nem működik!')
        );
    }

  return (
    <div className='navbar gradient-bg'>
        <div className="navbar-links">
            <div className="navbar-links_logo">
                <a href='#'><img src={logo} alt="képek"/></a>
            </div>
            <div className="navbar-links_container">
                <Menu/>
            </div>
        </div>
        <div className='navbar-webshop'>
            <button onClick={noWebShop}>Webáruház</button>
        </div>
        <div className="navbar-social">
            <Social/>
        </div>

        <div className="navbar-menu">
            {
                toggleMenu ?
                <AiFillCloseSquare className='navbar-menu_icon' onClick={() => setToggleMenu(false)}/> :
                <BiMenu className='navbar-menu_icon' onClick={() => setToggleMenu(true)}/> 
                
            }
            {
                toggleMenu && 
                (<div className="navbar-menu_container scale-up-center">
                    
                        <Menu />
                        <div className='navbar-menu_webshop'>
                            <button onClick={noWebShop}>Webáruház</button>
                        </div>
                        <div className="navbar-menu_social">
                            <SocialMenu />
                        </div>
                    
                    
                </div>)
            }
        </div>

    </div>
  )
}

export default Navbar