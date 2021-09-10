const Card = ({ coin, loading }) => {
  return (
    <>
      <div className="card">
        <div className="card-divider">
          {loading ? (
            <>
              <div className="card-up">
                <img src={coin.image.small} className="coin-icon" />
                <h5>
                  {coin.tickers[0].base} / {coin.tickers[0].target}
                </h5>
              </div>
              <div className="card-down">
                <span>
                  <h6>Price :</h6>
                  <p style={{ color: coin.tickers[0].trust_score }}>
                    {coin.tickers[0].last.toFixed(2)} $
                  </p>
                </span>
                <span>
                  <h6>Volume :</h6>
                  <p style={{ color: coin.tickers[0].trust_score }}>
                    {coin.tickers[0].volume.toFixed(2)} $
                  </p>
                </span>
                <span>
                  <h6>Bid/Ask :</h6>
                  <p style={{ color: coin.tickers[0].trust_score }}>
                    {coin.tickers[0].bid_ask_spread_percentage.toFixed(4)} $
                  </p>
                </span>
              </div>
              <form action={coin.tickers[0].trade_url} target="_blank">
                <button type="sumbit">Market</button>
              </form>
            </>
          ) : (
            <img
              className="loader"
              src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
