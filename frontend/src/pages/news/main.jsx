import React from 'react';
import Navbar from '../../components/navbar/content';
import PattonReportMainPosts from '../../components/news/PattonReportMainPosts/pattonReportMainPosts';
import FeaturedPosts from '../../components/news/FeaturedPosts/featuredPosts';
import LatestAndTrendingPosts from '../../components/news/LatestAndTrendingPosts/latestAndTrendingPosts';
import Footer from '../../components/footer/footer';
import './main.css';

const News = () => {
    return(
        <div>
            <Navbar />
            <PattonReportMainPosts />
            <FeaturedPosts />
            <LatestAndTrendingPosts />
            <Footer />
        </div>
    )
}

export default News;