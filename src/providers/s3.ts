import { GB, TB } from "../units";

import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/s3.svg';

const provider: Provider = {
  name: "S3",
  type: "application",
  icon,
  url: "https://aws.amazon.com/s3/pricing/",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.023;
  }
};

export default provider;