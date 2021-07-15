import React, {useState} from 'react';
import './latestAndTrendingPosts.css';
import PattonNewsData from '../pattonNewsData';

const LatestAndTrendingPosts = () => {
    
    const [openTab1, setopenTab1] = useState(true);
    const [openTab2, setopenTab2] = useState(false);

    const open = (e, type) => {
        if(type === 'LATEST'){
            setopenTab1(true);
            setopenTab2(false);
        }else{
            setopenTab1(false);
            setopenTab2(true);
        }
      }

    return (
       <div className = "latest-and-trending-container">
            <div className="tab">
            <button className = {openTab1 ? 'active' : ''} onClick={(e) => open(e, "LATEST")} id="defaultOpen">LATEST</button>
            <button className = {openTab2 ? 'active' : ''} onClick={(e) => open(e, "TRENDING")}>TRENDING</button>
            </div>
            
            <div id="LATEST" className="tabcontent" style = {{'display' : openTab1 ? 'block' : 'none'}}>
                <ul>
                {
                    PattonNewsData.map(data => {
                        if(data.type === "latest"){
                            return(
                                <li>
                                <div className="tabcontent-category">Category</div>
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

            <div id="TRENDING" className="tabcontent" style = {{'display' : openTab2 ? 'block' : 'none'}}>
                <ul>
                    {
                        PattonNewsData.map(data => {
                            if(data.type === "trending"){
                                return(
                                    <li>
                                    <div className="tabcontent-category">Category</div>
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
