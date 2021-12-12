import "./App.scss";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Collection from "./components/Collection";
import Hero from "./components/Hero";

function App() {
  const [collection, setCollection] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  useEffect(() => {
    const getCollection = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x5787981e1c2B96B2dc55D525B54d5c8b4AB13304&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setCollection(openseaData.data.assets);
    };

    return getCollection();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero selectedCharacter={selectedCharacter} collection={collection} />
      <Collection collection={collection} setSelectedCharacter={setSelectedCharacter} />
    </div>
  );
}

export default App;
