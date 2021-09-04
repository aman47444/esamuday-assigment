import React, { useState } from 'react'
import './style.css';

export default function Filter(props) {
    const [isClick, setIsClick] = useState(false)

    const popup = (
        <div className="container">
            <div className="tringleShap"></div>
            <div className="filterCard">
                <ul>
                    <li className="checkbocCon">
                        <input type="checkbox" className="check" onChange={props.handleMoreClick} />
                        <label>Less than 1 Month Old</label>
                    </li>
                    <li className="checkbocCon">
                        <input type="checkbox" className="check" onChange={props.handleLessClick} />
                        <label>More than 1 Month Old</label>
                    </li>
                </ul>
                <div>
                    <button onClick={() => setIsClick(false)} className="btn btn-primary float-right">Cancel</button>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <button onClick={() => setIsClick(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-funnel" viewBox="0 0 16 16">
                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z" />
                </svg>
                <span>Filter</span>
            </button>
            {isClick && <div>{popup}</div>}
        </>
    )
}
