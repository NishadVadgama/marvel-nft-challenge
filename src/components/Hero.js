import React from "react";
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import { useState, useEffect } from "react/cjs/react.development";
import './Hero.scss';

const Hero = ({ selectedCharacter, collection }) => {

    const [activeChracter, setActiveChracter] = useState(collection?.[0]);

    useEffect(() => {
        setActiveChracter(collection?.[selectedCharacter])
    }, [collection, selectedCharacter])

    return <div className="heroContainer">
        <div className="heroContent">
            <div className="heroHighlight">
                <div className="characterContainer">
                    <img src={activeChracter?.image_original_url} alt="" className="selectedCharacter" />
                </div>
            </div>
            <div className="characterDetails">
                <div className="title">{activeChracter?.name}</div>
                <div className="itemNumber">{activeChracter?.id}</div>
            </div>
            <div className="ownerDetails">
                <div className="ownerName">
                    <div className="ownerAddress">
                        {activeChracter?.name}
                    </div>
                    <div className="ownerHandle">
                        @{activeChracter?.name}
                    </div>
                </div>
                <div className="ownerLink"><span className="ownerLinkIcon"><FaInstagram /></span></div>
                <div className="ownerLink"><span className="ownerLinkIcon"><FaTwitter /></span></div>
                <div className="ownerLink"><span className="ownerLinkIcon"><FaInstagram /></span></div>
            </div>
        </div>
    </div>;
};

export default Hero;
