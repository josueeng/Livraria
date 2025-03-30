import React from 'react';
import './Footer.scss';

import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Twitter from '../../assets/twiter.png';
import Youtube from '../../assets/youtube.png';
import Linkedin from '../../assets/linkedin.png';

export default function Footer() {
    return (
        <footer>
            <div className='FooterTop'>
                <p className='Number'>4002-8922</p>
                <div className='Redes'>
                    <img src={Facebook} alt='' className='Rede' />
                    <img src={Instagram} alt='' className='Rede' />
                    <img src={Twitter} alt='' className='Rede' />
                    <img src={Youtube} alt='' className='Rede' />
                    <img src={Linkedin} alt='' className='Rede' />
                </div>
            </div>
            <div className='FooterBot'>
                <p className='Text'>© Layout desenvolvido pela Vai Na Web para fins educativos - 2024 | Josué G. Lopes</p>
            </div>
        </footer>
    );
}