import React from "react";
import PropTypes from "prop-types";
import { HackathonPageTemplate } from "../../templates/hackathon-page";

const HackathonPagePreview = ({ entry, getAsset }) => {
    const firstPlace = entry.getIn(["data", "firstplace"]);
    const firstplace = firstPlace ? firstPlace.toJS() : [];

    const secondPlace = entry.getIn(["data", "secondplace"]);
    const secondplace = secondPlace ? secondPlace.toJS() : [];

    const thirdPlace = entry.getIn(["data", "thirdplace"]);
    const thirdplace = thirdPlace ? thirdPlace.toJS() : [];

    const Rules = entry.getIn(["data", "rules"]);
    const rules = Rules ? Rules.toJS() : [];

    const entrySpeakers = entry.getIn(["data","speakers"]);
    const speakers = entrySpeakers ? entrySpeakers.toJS() : [];

    const Sponsors = entry.getIn(["data","sponsors"]);
    const sponsors = Sponsors ? Sponsors.toJS() : [];

    return (
        <HackathonPageTemplate
            title={entry.getIn(["data", "title"])}
            subtitle={entry.getIn(["data", "subtitle"])}
            hackathondate={entry.getIn(["data", "hackathondate"])}
            registerLink={entry.getIn(["data", "registerLink"])}
            abouthackathon={{
                title: entry.getIn(["data", "about", "title"]),
                description: entry.getIn(["data", "about", "description"])
            }}
            infohackathon={{
                who: entry.getIn(["data", "infohackathon", "who"]),
                when: entry.getIn(["data", "infohackathon", "when"]),
                where: entry.getIn(["data", "infohackathon", "where"]),
                linkWhere: entry.getIn(["data", "infohackathon", "linkWhere"]),
            }}
            challenge={{
                title: entry.getIn(["data", "challenge", "title"]),
                description: entry.getIn(["data", "challenge", "description"])
            }}
            firstplace={{ firstplace }}
            secondplace={{ secondplace }}
            thirdplace={{ thirdplace }}
            rules={{ rules }}
            speakers={{ speakers }}
            sponsors={{ sponsors }}
        />
    );
};

HackathonPagePreview.propTypes = {
    entry: PropTypes.shape({
        getIn: PropTypes.func
    }),
    getAsset: PropTypes.func
};

export default HackathonPagePreview;
