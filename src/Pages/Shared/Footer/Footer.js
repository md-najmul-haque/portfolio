import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import React from 'react';


const Footer = () => {
    const year = new Date().getFullYear()
    return (

        <footer className="footer footer-center text-white py-10">
            <div className='grid grid-flow-col gap-4 pb-0 mb-0 text-3xl' >
                <a href="https://www.linkedin.com/in/md-najmul-haque/" rel="noreferrer" role='button' target='_blank'><BsLinkedin /></a>
                <a href="https://github.com/md-najmul-haque" rel="noreferrer" role='button' target='_blank'><BsGithub /></a>
                <a href="https://www.facebook.com/KupjolerJahaji" rel="noreferrer" role='button' target='_blank'><BsFacebook /></a>
            </div>
            <p>Copyright © {year} - All right reserved.</p>
        </footer>
    );
};

export default Footer;