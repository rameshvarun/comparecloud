import { GB, TB } from "../units";
import Provider from "../provider";

const provider: Provider = {
  name: "Sync.com",
  url: "https://www.sync.com/",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= TB(2)) {
      return 8 * 12;
    }
  }
};

export default provider;
