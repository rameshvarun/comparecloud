import * as React from "react";
import * as ReactDOM from "react-dom";

import providers from "./providers";

class App extends React.Component<
  {},
  {
    storage: number;
  }
> {
  constructor(props) {
    super(props);
    this.state = { storage: 100 };
  }
  render() {
    return (
      <div>
        Required Storage:{" "}
        <input
          type="number"
          value={this.state.storage}
          onChange={event =>
            this.setState({ storage: parseInt(event.target.value, 10) })
          }
        />{" "}
        GB
        <div>
          {providers
            .map(p => {
              let price: number | undefined = undefined;
              if (p.getYearlyPrice) {
                price = p.getYearlyPrice(this.state.storage);
              } else if (p.getMonthlyPrice) {
                let monthlyPrice = p.getMonthlyPrice(this.state.storage);
                if (monthlyPrice) price = 12 * monthlyPrice;
              } else {
                throw new Error(
                  `${
                    p.name
                  } needs to implement getYearlyPrice or getMonthlyPrice or both.`
                );
              }

              return {
                provider: p,
                price
              };
            })
            .sort((a, b) => {
              if (a.price != undefined && b.price == undefined) {
                return -1;
              } else if (a.price == undefined && b.price != undefined) {
                return 1;
              } else if (
                a.price != undefined &&
                b.price != undefined &&
                a.price !== b.price
              ) {
                return a.price - b.price;
              }

              return a.provider.name.localeCompare(b.provider.name);
            })
            .map(({ provider, price }) => (
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    <a href={provider.url}>{provider.name}</a>
                  </h5>
                  <p className="card-text">
                    {price == 0 && "Free"}
                    {price !== undefined &&
                      price > 0 && <span>${price.toFixed(2)} / year</span>}
                    {price == undefined && "No plan available."}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
