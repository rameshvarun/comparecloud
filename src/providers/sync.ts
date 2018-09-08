import { GB, TB } from "../units";
import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from "./icons/sync.svg";

const provider: Provider = {
  name: "Sync.com",
  type: "personal",
  icon,
  features: {
    rclone: false
  },
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
