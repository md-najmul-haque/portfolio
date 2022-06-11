import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer class="footer footer-center p-4 text-base-content">
            <div>
                <p>Copyright © {year} - All right reserved by Md Najmul Haque</p>
            </div>
        </footer>
    );
};

export default Footer;