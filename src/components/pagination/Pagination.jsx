import React from 'react';
import styles from "./pagination.module.sass";

const Pagination = (props) => {

    return (
        <div className={styles["pagination-container"]}>
            <input
                type="button"
                className={styles["prev-button"]}
                value="Previous"
                onClick={(event) => { props.goToPreviousPage() }}
            />
            <div className={styles["vl"]}></div>
            <input
                type="button"
                className={styles["prev-button"]}
                value="Next"
                onClick={(event) => { props.goToNextPage() }}
            />
        </div>

    )

}

export default Pagination;