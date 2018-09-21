import { GB, TB } from "../units";
import Provider from "../provider";
import { Unsupported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/icloud.png";

const provider: Provider = {
  name: "iCloud",
  type: "personal",
  icon,
  features: {
    rclone: Unsupported(),
    videoPreviews: Unsupported()
  },
  url: "https://support.apple.com/en-us/HT201238",
  getMonthlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= GB(50)) {
      return 0.99;
    } else if (storage <= GB(200)) {
      return 2.99;
    } else if (storage <= TB(2)) {
      return 9.99;
    }
  }
};

export default provider;
