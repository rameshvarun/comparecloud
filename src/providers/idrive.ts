import { GB, TB } from "../units";

import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/idrive.png';

const provider: Provider = {
  name: "IDrive",
  type: "personal",
  url: "https://www.idrive.com/pricing",
  icon,
  features: {
    rclone: false
  },
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
