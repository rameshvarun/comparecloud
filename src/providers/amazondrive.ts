import { GB, TB } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "Amazon Drive",
  url: "https://www.amazon.com/gp/drive/about",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= GB(100)) {
      return 11.99;
    } else if (storage <= TB(1)) {
      return 59.99;
    } else if (storage <= TB(30)) {
      return 59.99 * Math.ceil(storage / TB(1));
    }
  }
};

export default provider;
