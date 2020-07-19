import React from 'react';
import styles from "./pagination.module.sass";

const Pagination = (props) => {

    return (
        <div className={styles["pagination-container"]}>
            <input
                type="button"
                className={styles["prev-button"]}
                value="Previous"
                onClick={(event) => { console.log("prev"); props.goToPreviousPage() }}
            />
            <div className="vl"></div>
            <input
                type="button"
                className={styles["prev-button"]}
                value="Next"
                onClick={(event) => { console.log("next"); props.goToNextPage() }}
            />
        </div>

    )

}

export default Pagination;