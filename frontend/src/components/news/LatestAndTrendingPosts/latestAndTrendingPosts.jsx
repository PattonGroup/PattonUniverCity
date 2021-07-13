import React, {useEffect} from 'react';
import './latestAndTrendingPosts.css';
import PattonNewsData from '../pattonNewsData';

const LatestAndTrendingPosts = () => {

    useEffect(() => {
        document.getElementById("defaultOpen").click();
    });

    const open = (evt, type) => {
        let i, tabcontent, tablinks;
      
        tabcontent = document.getElementsByClassName("tabcontent");
        
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        document.getElementById(type).style.display = "block";
        evt.currentTarget.className += " active";
      }

    return (
       <div className = "latest-and-trending-container">
            <div className="tab">
            <button className="tablinks" onClick={(e) => open(e, "LATEST")} id="defaultOpen">LATEST</button>
            <button className="tablinks" onClick={(e) => open(e, "TRENDING")}>TRENDING</button>
            </div>

            
            <div id="LATEST" className="tabcontent">
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

            <div id="TRENDING" className="tabcontent">
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
