import { GB, TB } from "../units";
import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from "./icons/onedrive.svg";
import { Supported } from "../features";

const provider: Provider = {
  name: "OneDrive",
  type: "personal",
  icon,
  features: {
    rclone: Supported(),
    videoPreviews: Supported(),
    platforms: {
      windows: true,
      macOS: true,
      android: true,
      iOS: true,
      linux: false
    }
  },
  url: "https://onedrive.live.com/about/en-us/plans/",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= GB(50)) {
      return 1.99 * 12;
    } else if (storage <= TB(1)) {
      return 69.99;
    } else if (storage <= TB(5)) {
      return 99.99;
    }
  }
};

export default provider;
