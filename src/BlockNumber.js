import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function BlockNumber() {
  const [blockData, setBlockData] = useState(null);
  const { blockHash } = useParams();

  useEffect(() => {
    async function getBlockData() {
      try {
        const response = await fetch(
          `https://eth-mainnet.alchemyapi.io/v2/${process.env.REACT_APP_ALCHEMY_API_KEY}/blocks/${blockHash}`
        );

        if (!response.ok) {
          // Handle the error if the response status is not ok (e.g., 404)
          throw new Error(
            `Error fetching block data: ${response.status} ${response.statusText}`
          );
        }

        const data = await response.json();
        setBlockData(data);
      } catch (error) {
        console.error(error.message);
        // You can set an error state or handle the error in a different way here
      }
    }

    getBlockData();
  }, [blockHash]);

  if (!blockData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Block Hash: {blockHash}</h2>
      <pre>{JSON.stringify(blockData, null, 2)}</pre>
    </div>
  );
}

export default BlockNumber;
