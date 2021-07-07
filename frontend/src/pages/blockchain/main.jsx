import React from 'react';
import TeamCard from '../../components/teamcard/teamCard';
import Navbar from '../../components/navbar/content';
import BlockchainCTA from '../../components/cta/blockchainCTA';
import Footer from '../../components/footer/footer';
import './main.css';

const Blockchain = () => {

    return(
        <div>
            <Navbar />
            <BlockchainCTA />
                <h5 className="blockchain-title">A NEW ERA IN EDUCATION</h5>
                <p className="blockchain-description">
                    Patton UniverCity transforming education through groundbreaking blockchain technology. Patton UniverCity will lead the way by using NFRs that will change the way education is viewed worldwide.
                </p>
            <TeamCard />
            <Footer />
        </div>
    )
}

export default Blockchain;