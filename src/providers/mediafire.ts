import { GB, TB } from "../units";
import Provider from "../provider";
import { Unsupported } from "../features";

const provider: Provider = {
  name: "Mediafire",
  type: "personal",
  url: "https://www.mediafire.com/upgrade/",
  features: {
    rclone: Unsupported()
  },
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(10)) {
      return 0;
    } else if (storage <= TB(1)) {
      return 7.5 * 12;
    } else if (storage <= TB(100)) {
      return 80 * 12;
    }
  }
};

export default provider;
