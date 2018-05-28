import React from "react";
import PropTypes from "prop-types";

const Rules = ({ data }) => (
    <ul>
        {
            data.map(rule => (
                <li key={rule.rule}>{rule.rule}</li>
            ))
        }
    </ul>
);

Rules.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            rule: PropTypes.string,
        })
    )
};

export default Rules;
