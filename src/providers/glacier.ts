import { GB, TB } from "../units";

import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/glacier.svg';

const provider: Provider = {
  name: "Glacier",
  type: "application",
  icon,
  features: {
    rclone: false
  },
  url: "https://aws.amazon.com/glacier/pricing/",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.004;
  }
};

export default provider;
