import React from "react";
import CollectionCard from "./CollectionCard";
import "./Collection.scss";

function Collection({ collection, setSelectedCharacter }) {
  return (
    <div className="collection">
      {collection.map((chracter, i) => (
        <div
          className="card"
          onClick={() => setSelectedCharacter(i)}
          key={chracter.id}
        >
          <CollectionCard
            id={chracter.id}
            name={chracter.name}
            image={chracter.image_url}
            traits={chracter.traits}
          />
        </div>
      ))}
    </div>
  );
}

export default Collection;
