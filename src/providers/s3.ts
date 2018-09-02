import { GB, TB } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "S3",
  type: "application",
  url: "https://aws.amazon.com/s3/pricing/",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.023;
  }
};

export default provider;
