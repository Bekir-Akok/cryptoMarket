import axios from "axios";
import { useState, useEffect } from "react";

const NewCard = ({ coin }) => {
  const [coinData, setCoinData] = useState();
  /*   const [loading, setLoading] = useState(false); */

  const getCoinData = async () => {
    let response = null;
    try {
      response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false&tickers=true&market_data=true&community_data=false&developer_data=false&sparkline=false`
      );
    } catch (err) {
      setCoinData(err.response);
    } finally {
      setCoinData(response && response.data);
    }
  };

  useEffect(() => {
    getCoinData();
  }, [coin]);

  return (
    <>
      {coinData instanceof Object ? (
        <>
          <div className="card" style={{ margin: "80px 0 0 0" }}>
            <div className="card-divider">
              <div className="card-up">
                <img src={coinData.image.small} className="coin-icon" />
                <h5>{coinData.id.toUpperCase()} / USD</h5>
              </div>
              <div className="card-down" style={{ height: "100%" }}>
                <span>
                  <h6>Price :</h6>
                  <p>{coinData.market_data.current_price.usd} $</p>
                </span>
                <span>
                  <h6>Volume :</h6>
                  <p>{coinData.market_data.total_volume.usd} $</p>
                </span>
                <span>
                  <h6>24h High</h6>
                  <p>{coinData.market_data.high_24h.usd} $</p>
                  <h6>24h Low</h6>
                  <p>{coinData.market_data.low_24h.usd} $</p>
                </span>
              </div>
              {/*               <form target="_blank">
                <button type="sumbit">Market</button>
              </form> */}
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default NewCard;
