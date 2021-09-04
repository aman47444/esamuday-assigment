import React, { useState, useEffect } from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { getPaginated } from '../../Redux/Action/getData';

export default function Pagination({ data, AnimalCard, pageLimit, title, dataLimit }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [pages] = useState(Math.round(data.length / dataLimit));
    const dispatch = useDispatch();

    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }

    const getPaginationGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    };

    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    };

    useEffect(() => {
        if (currentPage > 1) {
            dispatch(getPaginated(currentPage, dataLimit))
        }
    }, [dataLimit, dispatch, currentPage])
    return (
        <div>
            <h1>{title}</h1>
            <div className="dataContainer">
                {
                    getPaginatedData().map((d, idx) => {
                        return <AnimalCard key={idx} data={d} />
                    })
                }
            </div>
            <div className="pagination">
                <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? 'disabled' : ''}`}>prev</button>
                {getPaginationGroup().map((item, index) => (
                    <button key={index} onClick={changePage} className={`paginationItem ${currentPage === item ? 'active' : null}`}>
                        <span>{item}</span>
                    </button>
                ))}
                <button onClick={goToNextPage} className={`next ${currentPage === pages ? 'disabled' : ''}`}>
                    next
                </button>
            </div>
        </div>
    )
}
