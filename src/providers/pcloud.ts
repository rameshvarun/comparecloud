import { GB, TB } from "../units";

import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/pcloud.svg';

const provider: Provider = {
  name: "pCloud",
  type: "personal",
  icon,
  features: {
    rclone: true
  },
  url: "https://www.pcloud.com/cloud-storage-pricing-plans.html",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(20)) {
      return 0;
    } else if (storage <= GB(500)) {
      return 47.88;
    } else if (storage <= TB(2)) {
      return 95.88;
    }
  }
};

export default provider;
