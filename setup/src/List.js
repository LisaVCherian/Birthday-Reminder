import React, { useState } from 'react';

const List = ({ id, name, age, image, del, increase }) => {

  return (
    <>
      <article key={id} className="person">
        <img src={image} alt={name}></img>
        <div>
          <h4>{name}</h4>
          <p>{age}</p>
        </div>
        <button className='btn' onClick={() => del(id)}>Delete</button>
        <button className='btn' onClick={() => increase(id)}>Increase</button>
      </article>
    </>
  )
}

export default List;

/* {people.map((person) => {
  const { id, name, age, image } = person;
  return (
    <article key={id} className="person">
      <img src={image} alt={name}></img>
      <div>
        <h4>{name}</h4>
        <p>{age}</p>
      </div>
    </article>
  )
})} */