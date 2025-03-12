import '../App.css'
import React, { useState } from "react";

const List = ({Data}) => {
    const [people, setPeople] = useState(Data || [])
    function clearFunction(){
        setPeople([])
    }
  return (
    <>
    <section className="container">
        <h1>{people.length} birthdays today</h1>
        {people.map((person)=>(
            <div className="profile-container" key={person.id}>
            <div className="profile-image">
              <img src={person.image} alt="profile picture"/>
            </div>
            <div className="profile-content">
              <h3>{person.name}</h3>
              <p>{person.age} years</p>
            </div>
          </div>
        ))}
        <button className="btn" onClick={clearFunction}>Clear All</button>
      </section>
    </>
  )
}

export default List