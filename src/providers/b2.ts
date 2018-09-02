import { GB, TB } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "Backblaze B2",
  url: "https://www.backblaze.com/b2/cloud-storage-pricing.html",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.005;
  }
};

export default provider;
