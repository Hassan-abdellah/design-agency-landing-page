import React from 'react'
import './team.css';
import { team } from '../../data';
import TeamCard from '../teamcard/TeamCard';
const Team = () => {
  return (
    <div className="wrapper">
        <div className="team-content">
            <h2>Meet Our Team</h2>
            <section className="team-grid">
                {
                    team.map((person,index) => (
                        <TeamCard person={person} key={index}/>
                    ))
                }
            </section>
        </div>
    </div>
  )
}

export default Team