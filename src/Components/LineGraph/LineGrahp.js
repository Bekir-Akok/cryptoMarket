import { Line } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

const LineGrahp = ({ coin, loading }) => {
  const [marketChart, setMarketChart] = useState();
  const [priceData, setPriceData] = useState();
  const [marketCapData, setMarketCapData] = useState();
  const [label, setLabel] = useState("");

  const getMarketChartData = async () => {
    let response = null;
    try {
      response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=30&interval=daily`
      );
    } catch (err) {
      setMarketChart(err.response);
    } finally {
      setMarketChart(response && response.data);
    }
  };

  useEffect(() => {
    getMarketChartData();
  }, [coin]);

  /*For line data */
  useEffect(() => {
    grahpData();
    labelText();
  }, [marketChart]);

  const grahpData = () => {
    const priceData = [];
    const marketCapData = [];
    if (marketChart != null) {
      for (let i = 0; i <= 30; i++) {
        if (marketChart.prices[i] != null) {
          priceData.push(marketChart.prices[i][1]);
          marketCapData.push(marketChart.total_volumes[i][1]);
        }
      }
    }
    setPriceData(priceData);
    setMarketCapData(marketCapData);
  };

  const labelText = () => {
    if (coin != null) {
      setLabel(coin.id);
    } else {
      setLabel("");
    }
  };

  const labels = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ];

  const dataSet = {
    label: label,
    fill: false,
    lineTension: 0.1,
    backgroundColor: "rgba(75,192,192,0.4)",
    borderColor: "rgba(75,192,192,1)",
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: "miter",
    pointBorderColor: "rgba(75,192,192,1)",
    pointBackgroundColor: "#fff",
    pointBorderWidth: 1,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: "rgba(75,192,192,1)",
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 1,
    pointHitRadius: 10
  };

  const priceGraph = {
    labels: labels,
    datasets: [
      {
        ...dataSet,
        data: priceData
      }
    ]
  };
  const volumeGraph = {
    labels: labels,
    datasets: [
      {
        ...dataSet,
        data: marketCapData
      }
    ]
  };

  return (
    <>
      {loading ? (
        <>
          <div className="graph-container">
            <div className="grahp">
              <h1>{coin.id.toUpperCase()} / USD</h1>
              <Line data={priceGraph} />
            </div>
            <div className="grahp">
              <h1>{coin.id.toUpperCase()} / USD VOLUME</h1>
              <Line data={volumeGraph} />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default LineGrahp;
