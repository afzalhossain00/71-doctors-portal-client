import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="p-10"
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
            }}
        >
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link to='/' className="link link-hover">Mawna chowrasta, Sreepur, Gazipur</Link>
                </div>
            </div>
            <div className='mt-16 text-center'>
                <p>Copyright 2022 All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;