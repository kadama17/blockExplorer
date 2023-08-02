import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Alchemy, Network } from "alchemy-sdk";

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function Home() {
  const [blockNumber, setBlockNumber] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Block Number</h2>
        <p className="text-3xl font-bold mb-6">{blockNumber}</p>
        <Link
          to={`/block/${blockNumber}`}
          className="px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600"
        >
          See Block
        </Link>
      </div>
    </div>
  );
}

export default Home;
