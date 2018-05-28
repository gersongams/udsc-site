import React from "react";
import PropTypes from "prop-types";
import { MemberPageTemplate } from "../../templates/member-page";

const MemberPagePreview = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(["data", "members", "member"]);
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];

    return (
        <MemberPageTemplate
            members={{ blurbs }}
        />
    );
};

MemberPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func
};

export default MemberPagePreview;
