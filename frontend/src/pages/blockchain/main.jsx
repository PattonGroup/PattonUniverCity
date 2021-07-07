import React from 'react';
import TeamCard from '../../components/teamcard/teamCard';
import Navbar from '../../components/navbar/content';
import BlockchainCTA from '../../components/cta/blockchainCTA';
import Footer from '../../components/footer/footer';

const Blockchain = () => {

    return(
        <div>
            <Navbar />
            <BlockchainCTA />
            <TeamCard />
            <Footer />
        </div>
    )
}


export default Blockchain;