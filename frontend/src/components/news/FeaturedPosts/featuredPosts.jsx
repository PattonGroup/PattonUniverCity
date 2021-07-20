import React from 'react';
import './featuredPosts.css';

const FeaturedPosts = () => {
    return (
       <div className = "featured-posts-container">
           <h6 className="featured-posts-subtitle">Featured Posts</h6>
           <hr style={{background: "#000", width: '100%', marginBottom: '4%'}}/>
           <div className = "first-section">
                <img src = "https://www.business.com/images/content/5ca/3e1aa5a215e8a458bb313/1500-0-" alt = "computer" width = "600px" height = "550px"/>
                <div className = "text-on-image">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dui vulputate, fringilla felis nec, consequat ante. Curabitur egestas </p>
                    <div><span>Jun 2021 <a href = "/">Read More</a></span></div>
                </div>
           </div>
           <div className = "second-section">
               <div>
                    <img className="img-one" src = "https://blog.zoom.us/wp-content/uploads/2020/03/zoom-for-education.jpg" alt = "learn" width = "250px" height = "180px"/>
                    <h5>Category</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dui vulputate, fringilla felis nec, consequat ante. Curabitur egestas</p>
               </div>
               <div>
                    <img src = "https://cdn.elearningindustry.com/wp-content/uploads/2019/06/why-adults-learn-a-second-language-struggle-1024x574.jpg" alt = "learn" width = "250px" height = "180px"/>
                    <h5>Category</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer a dui vulputate, fringilla felis nec, consequat ante. Curabitur egestas</p>
               </div>
           </div>
       </div>
    )
}

export default FeaturedPosts;
