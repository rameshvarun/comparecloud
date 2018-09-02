import { GB, TB } from "../units";
import Provider from "../provider";

const provider: Provider = {
  name: "Box",
  type: "personal",
  url: "https://www.box.com/",
  getMonthlyPrice(storage: number): number | undefined {
    if (storage <= GB(10)) {
      return 0;
    } else if (storage <= GB(100)) {
      return 10;
    }
  }
};

export default provider;
