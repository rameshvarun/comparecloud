import { GB, TB } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "Glacier",
  type: "application",
  url: "https://aws.amazon.com/glacier/pricing/",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.004;
  }
};

export default provider;
