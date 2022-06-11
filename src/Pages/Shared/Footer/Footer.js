import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer footer-center p-4 text-white">
            <div>
                <p>Copyright © {year} - All right reserved by Md Najmul Haque</p>
            </div>
        </footer>
    );
};

export default Footer;