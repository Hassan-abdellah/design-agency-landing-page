import React from 'react'
import './teamcard.css';
const TeamCard = ({person}) => {
  return (
    <div className="team-card">
        <div className="card-head">
            <img src={person.imageURL} alt={person.name} className="team-image"/>
        </div>
        <div className="card-body">
            <h2>{person.name}</h2>    
            <p>{person.title}</p>
            <span>Follow {person.gender === 'male' ? 'him' :'her'}:</span>
            <ul className="social-icons">
            <li>
                        <a href="#">
                            <img src="/images/facebook.svg" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/twitter.svg" alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="/images/instagram.svg" alt="instagram" />
                        </a>
                    </li>
            </ul>   
        </div>
    </div>
  )
}

export default TeamCard