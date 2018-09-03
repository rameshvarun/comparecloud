import { GB, TB } from "../units";
import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/sugarsync.png';

const provider: Provider = {
  name: "SugarSync",
  type: "personal",
  icon,
  features: {
    rclone: false
  },
  url: "https://www2.sugarsync.com/",
  getMonthlyPrice(storage: number): number | undefined {
    if (storage <= GB(100)) {
      return 7.49;
    } else if (storage <= GB(250)) {
      return 9.99;
    } else if (storage <= GB(500)) {
      return 18.95;
    }
  }
};

export default provider;
