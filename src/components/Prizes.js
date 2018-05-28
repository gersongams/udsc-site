import React from "react";
import PropTypes from "prop-types";

const Prizes = ({ data }) => (
    <ul>
        {
            data.map(price => (
                <li key={price.price}>{price.price}</li>
            ))
        }
    </ul>
);

Prizes.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            price: PropTypes.string,
        })
    )
};

export default Prizes;
