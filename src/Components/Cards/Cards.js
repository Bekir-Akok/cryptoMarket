import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Cards = () => {
  const [btc, setBtc] = useState([]);
  const [etc, setEtc] = useState([]);
  const [perl, setPerl] = useState([]);
  const [loading, setLoading] = useState("");

  const BASEURL = "https://api.coingecko.com/api/v3";

  useEffect(async () => {
    setLoading(false);

    const getBtc = await axios.get(
      `${BASEURL}//coins/bitcoin?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const getEtc = await axios.get(
      `${BASEURL}//coins/ethereum?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    const getPerl = await axios.get(
      `${BASEURL}//coins/perlin?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
    );
    await axios.all([getBtc, getEtc, getPerl]).then(
      axios.spread((...allData) => {
        const btcData = allData[0];
        const etcData = allData[1];
        const perlData = allData[2];

        setBtc(btcData.data);
        setEtc(etcData.data);
        setPerl(perlData.data);
      })
    );

    setLoading(true);
  }, []);

  return (
    <>
      <div className="card-wrapper">
        <Card coin={btc} loading={loading} />
        <Card coin={etc} loading={loading} />
        <Card coin={perl} loading={loading} />
      </div>
    </>
  );
};

export default Cards;
