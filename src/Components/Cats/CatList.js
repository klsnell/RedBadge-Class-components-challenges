import React from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.cats.map((cat, index) => {
        return (
          <div key={index}>
            <li>{cat}</li>
          </div>
        )
      })}
      <ul>
      </ul>
    </div>
  )
}

export default CatList;
