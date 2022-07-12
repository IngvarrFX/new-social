import React from "react";
import {usePagination, DOTS} from "./usePagination";
import styles from "./Pagination.module.css";

type PaginationPropsType = {
    totalCount: number
    pageSize: number
    siblingCount?: number
    currentPage: number
    onPageChange: (value: number) => void
}
export const Pagination = (props: PaginationPropsType) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange && paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <ul className={styles.container}>
            <li onClick={onPrevious}>
                <div className="arrow left"/>
            </li>
            {paginationRange && paginationRange.map((pageNumber, index) => {
                if (pageNumber === DOTS) {
                    return <li key={index} className={styles.dots}>&#8230;</li>;
                }
                return (
                    <li key={index} className={currentPage === pageNumber ? styles.item + " " + styles.current : styles.item} onClick={() => onPageChange(+pageNumber)}>
                        {pageNumber}
                    </li>
                );
            })}
            <li onClick={onNext}>
                <div className="arrow right"/>
            </li>
        </ul>
    );
};

