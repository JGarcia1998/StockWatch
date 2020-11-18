import React from "react";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
function TopStocks(props) {
  const [showPopup, setShowPopup] = useState(false);
  const [stockUpdate, setStockUpdate] = useState([]);
  const [prevStock, setPrevStock] = useState(null);
  const [stockInfo, setStockInfo] = useState([]);

  const symbols = ["AAPL", "NFLX", "GOOGL", "TSLA"];
  let temp = [];

  useEffect(() => {
    if (!stockInfo.length) {
      fetchSymbols();
    }
  }, []);
  // Run after fetchSymbols finishes:
  useEffect(() => {
    if (stockInfo.length) {
      props.onInitialSet(
        stockInfo[2].symbol,
        stockInfo[2].percentage,
        stockInfo[2].close
      );
    }
  }, [stockInfo]);

  const changeStock = (e) => {
    setPrevStock(props.selectedStock);
    props.onSetSelectedStock(e);
  };

  async function fetchSymbols() {
    for (let i = 0; i < symbols.length; i++) {
      await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbols[i]}&apikey=LTTSRB12RXT9ZBDH`
      )
        .then((res) => res.json())
        .then((allStocks) => {
          console.log(allStocks);
          try {
            let metaDataEntries = allStocks["Meta Data"];
            let symbol = metaDataEntries["2. Symbol"].toUpperCase();
            let pastDataEntries = allStocks["Time Series (Daily)"];
            let pastDataValues = Object.values(pastDataEntries);
            let mostRecentValue = pastDataValues[0];
            let x = Object.values(mostRecentValue);
            let open = parseFloat(x[0]).toFixed(2);
            let high = parseFloat(x[1]).toFixed(2);
            let low = parseFloat(x[2]).toFixed(2);
            let close = parseFloat(x[3]).toFixed(2);
            let colorToSend;

            let percentage = close - open;
            if (percentage < 0) {
              colorToSend = "red";
            } else {
              colorToSend = "rgb(30, 216, 139)";
            }
            let result = parseFloat(percentage).toFixed(2);

            temp.push({
              symbol: symbol,
              high: high,
              low: low,
              close: close,
              open: open,
              percentage: result,
              color: colorToSend,
            });
          } catch {
            console.log("surpassed the limit of 4 requests in under a minute");
          }
        });
    }

    setStockInfo(temp);
  }

  const showPopupFunc = (e) => {
    if (showPopup === false) {
      setShowPopup(true);
    }

    let search = e.target.dataset.name;

    if (search != undefined) {
      fetch(
        `https://newsapi.org/v2/everything?q=${search}&apiKey=` +
          process.env.REACT_APP_KEY
      )
        .then((res) => res.json())
        .then((results) => {
          setStockUpdate(results.articles);
        });
    }
  };

  const closePopUp = () => {
    setShowPopup(false);
    setStockUpdate([]);
  };

  return (
    <>
      <div className={showPopup === true ? "news-popup" : "news-popup-false"}>
        <button onClick={closePopUp} className="news-close">
          X
        </button>

        {stockUpdate.splice(0, 3).map((article) => {
          return (
            <div className="stock-updates">
              <img
                src={article.urlToImage}
                className="stock-updates__img"
                alt="News Image"
              />
              <div className="stock-updates__col">
                <h2 className="news__title">{article.title}</h2>
                <p className="news__info">{article.content}</p>
                <Button
                  style={{
                    width: "30%",
                    margin: "1rem 0",
                    alignSelf: "flex-start",
                  }}
                  variant="contained"
                  color="primary"
                  href="#"
                >
                  Article
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="header__stock-hold">
        {/* <DragDropContainer targetKey="foo"> */}

        <div className="header__stock-row">
          <div className="header__stock">
            <div
              data-attr="A"
              data-percentage={
                stockInfo[0]?.percentage ? stockInfo[0].percentage : "9.5"
              }
              data-symbol="AAPL"
              data-price={stockInfo[0]?.close ? stockInfo[0].close : "loading"}
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="apple" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.high ? stockInfo[0].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.low ? stockInfo[0].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.open ? stockInfo[0].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[0]?.close ? stockInfo[0].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon">
              <span className="header__icon-1-symbol">A</span>
            </div>
            <p className="header__stock-title">AAPL</p>
            <p
              style={{
                color: stockInfo[0]?.color ? stockInfo[0].color : "green",
              }}
              className="header__stock-price"
            >
              {stockInfo[0]?.percentage ? stockInfo[0].percentage : "loading"}%
            </p>
          </div>
          {/* </DragDropContainer> */}

          <div data-name="netflix" className="header__stock">
            <div
              data-attr="N"
              data-percentage={
                stockInfo[1]?.percentage ? stockInfo[1].percentage : "9.5"
              }
              data-symbol="NFLX"
              data-price={stockInfo[1]?.close ? stockInfo[1].close : "loading"}
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="netflix" className="header__stock-news-word">
                News
              </div>
            </div>
            <h2 className="header__stats">Stats</h2>
            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.high ? stockInfo[1].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.low ? stockInfo[1].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.open ? stockInfo[1].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[1]?.close ? stockInfo[1].close : "loading"}
                </span>
              </div>
            </div>
            <div className="header__icon-2">
              <span className="header__icon-2-symbol">N</span>
            </div>
            <p className="header__stock-title">NFLX</p>
            <p
              style={{
                color: stockInfo[1]?.color ? stockInfo[1].color : "green",
              }}
              className="header__stock-price"
            >
              {stockInfo[1]?.percentage ? stockInfo[1].percentage : "loading"}%
            </p>
          </div>
        </div>

        <div className="header__stock-row">
          <div data-name="google" className="header__stock">
            <div
              data-attr="G"
              data-symbol="GOOGL"
              data-price={stockInfo[2]?.close ? stockInfo[2].close : "loading"}
              data-percentage={
                stockInfo[2]?.percentage ? stockInfo[2].percentage : "9.5"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="google" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.high ? stockInfo[2].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.low ? stockInfo[2].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.open ? stockInfo[2].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[2]?.close ? stockInfo[2].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-3">
              <span className="header__icon-3-symbol">G</span>
            </div>
            <p className="header__stock-title">GOOGL</p>
            <p
              style={{
                color: stockInfo[2]?.color ? stockInfo[2].color : "green",
              }}
              className="header__stock-price"
            >
              {stockInfo[2]?.percentage ? stockInfo[2].percentage : "loading"}%
            </p>
          </div>

          <div data-name="tesla" className="header__stock">
            <div
              data-attr="T"
              data-symbol="TSLA"
              data-price={stockInfo[3]?.close ? stockInfo[3].close : "loading"}
              data-percentage={
                stockInfo[3]?.percentage ? stockInfo[3].percentage : "9.5"
              }
              onClick={changeStock}
              className="header__stock-hover"
            ></div>
            <div onClick={showPopupFunc} className="header__stock-news">
              <div data-name="tesla" className="header__stock-news-word">
                News
              </div>
            </div>

            <h2 className="header__stats">Stats</h2>

            <div className="header__flex-col">
              <div className="header__flex-row">
                <span className="header__grid-title">High:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.high ? stockInfo[3].high : "loading"}
                </span>
                <span className="header__grid-title">Low:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.low ? stockInfo[3].low : "loading"}
                </span>
              </div>

              <div className="header__flex-row">
                <span className="header__grid-title">Open:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.open ? stockInfo[3].open : "loading"}
                </span>
                <span className="header__grid-title">Close:</span>
                <span className="header__grid-price">
                  ${stockInfo[3]?.close ? stockInfo[3].close : "loading"}
                </span>
              </div>
            </div>

            <div className="header__icon-4">
              <span className="header__icon-4-symbol">T</span>
            </div>
            <p className="header__stock-title">TSLA</p>
            <p
              style={{
                color: stockInfo[3]?.color ? stockInfo[3].color : "green",
              }}
              className="header__stock-price"
            >
              {stockInfo[3]?.percentage ? stockInfo[3].percentage : "loading"}%
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSelectedStock: (e) =>
      dispatch({
        type: "SETSELECTEDSTOCK",
        value: {
          name: e.target.dataset.symbol,
          price: e.target.dataset.price,
          symbol: e.target.dataset.attr,
          percentage: e.target.dataset.percentage,
        },
      }),

    onInitialSet: (symbol, percentage, price) => {
      dispatch({
        type: "INITIALSET",
        value: {
          price: price,
          symbol: symbol,
          percentage: percentage,
        },
      });
    },
  };
};

const mapStateToProps = (state) => {
  return {
    selectedStock: state.selectedStock,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopStocks);
