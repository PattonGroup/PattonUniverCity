import React, {useState} from 'react';
import './latestAndTrendingPosts.css';
import PattonNewsData from '../pattonNewsData';

const LatestAndTrendingPosts = () => {
    
    const [toggleTab, setToggleTab] = useState(true);

    const open = (e, type) => {
        if(type === 'LATEST'){
            setToggleTab(true);
        }else{
            setToggleTab(false);
        }
      }

    return (
       <div className = "latest-and-trending-container">
            <div className="tab">
            <button className = {toggleTab ? 'active' : ''} onClick={(e) => open(e, "LATEST")} id="defaultOpen">LATEST</button>
            <button className = {!toggleTab ? 'active' : ''} onClick={(e) => open(e, "TRENDING")}>TRENDING</button>
            </div>
            
            <div id="LATEST" className="tabcontent" style = {{'display' : toggleTab ? 'block' : 'none'}}>
                <ul>
                {
                    PattonNewsData.map(data => {
                        if(data.type === "latest"){
                            return(
                                <li>
                                <div>Category</div>
                                <div className = "list-items">
                                    <h6>{data.title}</h6>
                                    <p>{data.description}</p>
                                </div>
                                </li>
                            )
                        }
                    })
                }
                </ul>
            </div>

            <div id="TRENDING" className="tabcontent" style = {{'display' : !toggleTab ? 'block' : 'none'}}>
                <ul>
                    {
                        PattonNewsData.map(data => {
                            if(data.type === "trending"){
                                return(
                                    <li>
                                    <div>Category</div>
                                    <div className = "list-items">
                                        <h6>{data.title}</h6>
                                        <p>{data.description}</p>
                                    </div>
                                    </li>
                                )
                            }
                        })
                    }
                    </ul>
                    
            </div>


       </div>
    )
}

export default LatestAndTrendingPosts;
