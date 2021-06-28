import React from 'react';
import './logoSlider.css'
import SocialRing from '../../assets/images/socialringlogo.png'
import PinkLemonade from '../../assets/images/pinklemonade.jpeg';

const LogoSlider = () => {
    return (
        <div className="client-slider">
            <div className="client-slide-track">
                <div className="client-slide">
                    <img src={SocialRing} height="100" width="150" alt="Social Ring" />
                </div>
                <div className="client-slide">
                    <img classNameName="pinklemonade" src={PinkLemonade} height="100" width="120" alt="PinkLemonade" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src={SocialRing} height="100" width="150" alt="Social Ring" />
                </div>
                <div className="client-slide">
                    <img classNameName="pinklemonade" src={PinkLemonade} height="100" width="120" alt="PinkLemonade" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png" height="100" width="250" alt="" />
                </div>
                <div className="client-slide">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png" height="100" width="250" alt="" />
                </div>
            </div>
        </div>
    )
}

export default LogoSlider;