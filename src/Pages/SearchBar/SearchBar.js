import { useState, useEffect } from "react";
import axios from "axios";
import { BiSearchAlt } from "react-icons/bi";
import NewCard from "../../Components/NewCard/NewCard";
import Header from "../../Components/Header/Header";
import LineGraph from "../../Components/LineGraph/LineGrahp";
import Footer from "../../Components/Footer/Footer";

const SearchBar = () => {
  const [cryptoSearch, setCryptoSearch] = useState("");
  const [selectedCrypto, setSelectedCrypto] = useState(null);
  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedLoading, setSelectedLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const BASEURL = "https://api.coingecko.com/api/v3";

  const getCoin = async () => {
    let apiRes = null;
    try {
      apiRes = await axios.get(`${BASEURL}/coins/list`);
    } catch (err) {
      setCoin(err.response);
    } finally {
      setCoin(apiRes && apiRes.data);
    }
  };

  const filtredCoin = () => {
    if (coin != null) {
      const result = coin.filter((coinf) => {
        return (
          coinf.name
            .toLocaleLowerCase()
            .indexOf(cryptoSearch.toLocaleLowerCase()) !== -1
        );
      });
      setCoin(result);
    }
  };

  const onChangeHandle = (e) => {
    e.preventDefault();
    setCryptoSearch(e.target.value);
    filtredCoin();
  };

  const selectedCoin = (x) => {
    setSelectedCrypto(x.x);
  };

  const itIsString = () => {
    if (cryptoSearch instanceof String) {
      setVisible(true);
    }
  };

  const loader = () => {
    if (selectedCrypto instanceof Object) {
      setSelectedLoading(true);
    }
  };

  useEffect(() => {
    setTimeout(() => setLoading(true), 3500);
    if (cryptoSearch === "") {
      getCoin();
    }
    itIsString();
    loader();
  }, [cryptoSearch, selectedCrypto]);

  console.log(coin);

  return (
    <>
      <Header />
      {loading ? (
        <div className="searchbar">
          <input
            type="search"
            placeholder="Search a Crypto Currency"
            onChange={(e) => onChangeHandle(e)}
            onClick={() => setVisible(true)}
            className="search"
          />
          <span className="searchbar-icon">
            <BiSearchAlt />
          </span>
          {visible ? (
            <div
              className="search-bar-down"
              onMouseLeave={() => setVisible(false)}
              onClick={() => setVisible(false)}
            >
              {Array.isArray(coin) ? (
                coin
                  .filter((y) => y.name.length < 16)
                  .slice(0, 8)
                  .map((x, i) => (
                    <p key={i} onClick={() => selectedCoin({ x })}>
                      {x.name}
                    </p>
                  ))
              ) : (
                <p>Yükleniyor...</p>
              )}
            </div>
          ) : null}
        </div>
      ) : (
        <img src="https://i.pinimg.com/originals/1d/c2/0f/1dc20f0308eaf34a7d34d33358d0a2d0.gif" />
      )}

      <div className="search-flex">
        <div className="search-card">
          <NewCard coin={selectedCrypto} />
        </div>
        <div className="search-graph">
          <LineGraph coin={selectedCrypto} loading={selectedLoading} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchBar;
