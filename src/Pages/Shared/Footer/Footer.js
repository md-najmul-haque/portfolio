import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer class="footer footer-center p-4 text-white text-xl">
            <div>
                <p>Copyright © {year} - All right reserved by Md Najmul Haque</p>
            </div>
        </footer>
    );
};

export default Footer;