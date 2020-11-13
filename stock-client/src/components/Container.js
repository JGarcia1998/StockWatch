import React from "react";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function Container() {
  const useStyles = makeStyles((theme) => ({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();
  const [news, setNews] = useState([]);
  const [prevStock, setPrevStock] = useState(null);
  const [selectedStock, setSelectedStock] = useState({
    name: "GOOGL",
    price: "1,999",
    symbol: "G",
    open: "$" + "122.45",
    close: "$" + "134.56",
    high: "$" + "188.94",
    low: "$" + "111.23",
  });

  console.log(prevStock);

  const changeStock = (e) => {
    setPrevStock(selectedStock);
    setSelectedStock({
      name: e.target.dataset.symbol,
      price: e.target.dataset.price,
      symbol: e.target.dataset.attr,
      open: "$" + "122.45",
      close: "$" + "134.56",
      high: "$" + "188.94",
      low: "$" + "111.23",
    });
  };

  //   useEffect(() => {
  //     fetch(
  //       `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_KEY}`
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //         setNews(result.articles);
  //       });
  //   }, [setNews]);

  return (
    <>
      <div className="main-body">
        <Navbar></Navbar>

        <div className="header">
          <h2 className="header__title">Top Stocks</h2>
          <p className="header__p">
            Latest prices and news related to each currency
          </p>

          <div className="header__stock-hold">
            {/* <DragDropContainer targetKey="foo"> */}

            <div className="header__stock-row">
              <div className="header__stock">
                <div
                  data-attr="A"
                  data-symbol="AAPL"
                  data-price="467.26"
                  onClick={changeStock}
                  className="header__stock-hover"
                ></div>
                <a href="#" className="header__stock-news">
                  <div className="header__stock-news-word">News</div>
                </a>

                <h2 className="header__stats">Stats</h2>

                <div className="header__flex-col">
                  <div className="header__flex-row">
                    <span className="header__grid-title">High:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Low:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>

                  <div className="header__flex-row">
                    <span className="header__grid-title">Open:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Close:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>
                </div>

                <div className="header__icon">
                  <span className="header__icon-1-symbol">A</span>
                </div>
                <p className="header__stock-title">AAPL</p>
                <p className="header__stock-price">15%</p>
              </div>
              {/* </DragDropContainer> */}

              <div className="header__stock">
                <div
                  data-attr="N"
                  data-symbol="NFLX"
                  data-price="467.26"
                  onClick={changeStock}
                  className="header__stock-hover"
                ></div>
                <a href="#" className="header__stock-news">
                  <div className="header__stock-news-word">News</div>
                </a>
                <h2 className="header__stats">Stats</h2>
                <div className="header__flex-col">
                  <div className="header__flex-row">
                    <span className="header__grid-title">High:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Low:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>

                  <div className="header__flex-row">
                    <span className="header__grid-title">Open:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Close:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>
                </div>
                <div className="header__icon-2">
                  <span className="header__icon-2-symbol">N</span>
                </div>
                <p className="header__stock-title">NFLX</p>
                <p className="header__stock-price">12%</p>
              </div>
            </div>

            <div className="header__stock-row">
              <div className="header__stock">
                <div
                  data-attr="G"
                  data-symbol="GOOGL"
                  data-price="467.26"
                  onClick={changeStock}
                  className="header__stock-hover"
                ></div>
                <a href="#" className="header__stock-news">
                  <div className="header__stock-news-word">News</div>
                </a>

                <h2 className="header__stats">Stats</h2>

                <div className="header__flex-col">
                  <div className="header__flex-row">
                    <span className="header__grid-title">High:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Low:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>

                  <div className="header__flex-row">
                    <span className="header__grid-title">Open:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Close:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>
                </div>

                <div className="header__icon-3">
                  <span className="header__icon-3-symbol">G</span>
                </div>
                <p className="header__stock-title">GOOGL</p>
                <p className="header__stock-price">9%</p>
              </div>

              <div className="header__stock">
                <div
                  data-attr="T"
                  data-symbol="TSLA"
                  data-price="467.26"
                  onClick={changeStock}
                  className="header__stock-hover"
                ></div>
                <a href="#" className="header__stock-news">
                  <div className="header__stock-news-word">News</div>
                </a>

                <h2 className="header__stats">Stats</h2>

                <div className="header__flex-col">
                  <div className="header__flex-row">
                    <span className="header__grid-title">High:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Low:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>

                  <div className="header__flex-row">
                    <span className="header__grid-title">Open:</span>
                    <span className="header__grid-price">$495.85</span>
                    <span className="header__grid-title">Close:</span>
                    <span className="header__grid-price">$467.26</span>
                  </div>
                </div>

                <div className="header__icon-4">
                  <span className="header__icon-4-symbol">T</span>
                </div>
                <p className="header__stock-title">TSLA</p>
                <p className="header__stock-price">3%</p>
              </div>
            </div>
          </div>

          <h2 className="header__news-title">Individual stock updates</h2>

          <div className="header__stock-news-grid">
            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-twtr"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">TWTR</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-ford"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">FORD</p>
                <p className="header__stock-news-grid-name">Car manufacturer</p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-btc"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">BTC</p>
                <p className="header__stock-news-grid-name">Crypto currency</p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-tsla"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">TSLA</p>
                <p className="header__stock-news-grid-name">
                  Electric car manufacturer
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-amzn"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">AMZN</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>

            <div className="header__stock-news-grid-container">
              <span className="header__stock-news-grid-logo-snap"></span>

              <div className="header__stock-news-grid-col">
                <p className="header__stock-news-grid-title">SNAP</p>
                <p className="header__stock-news-grid-name">
                  Social Network Company
                </p>
              </div>
              <a className="header__stock-news-grid-news" href="#">
                Updates
              </a>
            </div>
          </div>

          <h2 className="header__news-title">News articles around the globe</h2>

          {/* {news.splice(0, 6).map((article) => {
            return (
              <div className="news">
                <img
                  src={article.urlToImage}
                  className="news__img"
                  alt="News Image"
                />
                <div className="news__col">
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
          })} */}
        </div>

        <div className="main-right">
          <div className="main-right__stock">
            <div className="main-right__logo">{selectedStock.symbol}</div>
            <h2 className="main-right__name">{selectedStock.name}</h2>
            <p className="main-right__price">${selectedStock.price}</p>
            <p className="main-right__percentage">+2.2% (5.76)</p>
            <svg
              className="main-right-chart"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="rgb(65, 98, 189)"
                fillOpacity="1"
                d="M0,128L26.7,149.3C53.3,171,107,213,160,245.3C213.3,277,267,299,320,272C373.3,245,427,171,480,154.7C533.3,139,587,181,640,170.7C693.3,160,747,96,800,80C853.3,64,907,96,960,101.3C1013.3,107,1067,85,1120,101.3C1173.3,117,1227,171,1280,202.7C1333.3,235,1387,245,1413,250.7L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
              ></path>
            </svg>
            <div className="main-right__days">
              <span className="main-right__times c">1D</span>
              <span className="main-right__times">5D</span>
              <span className="main-right__times">1M</span>
              <span className="main-right__times">6M</span>
              <span className="main-right__times">1Y</span>
              <span className="main-right__times">5Y</span>
            </div>
          </div>

          <div className="main-right__info">
            <h2 className="main-right__info-name">ABOUT</h2>
            <p className="main-right__text">
              StockWatch is a currency dashboard for getting daily updates on
              stock and crypto prices. Each price is updated every day at market
              close(3pm).
            </p>
          </div>
        </div>

        <button className="btn-fixed"></button>
      </div>
    </>
  );
}

export default Container;
