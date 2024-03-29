import React from 'react';
import './blockchainOverlay.css';

const BlockchainOverlay = () => {
    return (
      <section id="blockchain-slider">
      <div className="title animated fadeInUp" data-testid="title-blockchain-overlay">BLOCKCHAIN</div>
        <div className="container">
            <div className="row">
              <div className="col-md-6.5">
                  <div className="block">
                    <h1 className="animated fadeInUp" data-testid="header-blockchain-overlay">Introduction education to the world of Blockchain Technology</h1>
                  </div>
                </div>
            </div>
        </div>
      </section> 
    )
}

export default BlockchainOverlay;