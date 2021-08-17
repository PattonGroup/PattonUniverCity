import React from 'react';
import './teamCard.css';
import TeamMemberInformation from './teamMember';


const TeamCard = () => {
    return (
        <div className = "team-card-body">
            <div className = "title-on-top">
                Meet the Blockchain Team
            </div>
            <div className = "team-card-container">
                {
                    TeamMemberInformation.map(member => {
                        return(
                            <div className = "team-card">   
                                <div className = "logo">
                                    <img src ='https://i.imgur.com/eagLwY7.png' alt ="logo"></img>
                                </div>

                                <div className = "title">
                                    <div>Patton Univercity</div>
                                    <div>Blockchain development team</div>
                                </div>

                                <div className = "teamcard-img">
                                    <img src={member.img_url} alt={member.name}></img>
                                </div>
                                <div className = "teammember-name">{member.name}</div>
                                <p>{member.description}</p>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )

}

export default TeamCard;