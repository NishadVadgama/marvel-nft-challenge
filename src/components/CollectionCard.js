import React from "react";
import { FaEthereum } from 'react-icons/fa'
import './CollectionCard.scss'

const CollectionCard = ({ id, name, traits, image }) => {
    return <div className="collectionCard">
        <img src={image} className="collectionImg" />
        <div className="detailBox">
            <div className="name">
                {name} <div className='id'> .#{id}</div>
            </div>
            <div className="priceBox">
                <span className="ethIcon">
                    <FaEthereum />
                </span>
                <div className="price">{traits[0]?.value}</div>
            </div>
        </div>
    </div>;
};

export default CollectionCard;
