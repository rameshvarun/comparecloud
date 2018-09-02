import { GB, TB } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "IDrive",
  url: "https://www.idrive.com/pricing",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= TB(2)) {
      return 69.5;
    } else if (storage <= TB(5)) {
      return 99.5;
    }
  }
};

export default provider;
