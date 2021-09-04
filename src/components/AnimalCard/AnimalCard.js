import React from 'react'
import './style.css'

export default function AnimalCard(props) {

    const { name, bornAt } = props.data 
    const newData = new Date(bornAt);
    return (
        <div className="cardConatiner">
            <span>{name}</span>
            <div><span>Age:{' '}</span>{newData.getMonth()}</div>
        </div>
    )
}
