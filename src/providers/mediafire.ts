import { GB, TB } from "../units";
import Provider from "../provider";
import { Unsupported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/mediafire.png";

const provider: Provider = {
  name: "Mediafire",
  type: "personal",
  icon,
  url: "https://www.mediafire.com/upgrade/",
  features: {
    rclone: Unsupported(),
    videoPreviews: Unsupported(),
    platforms: {
      windows: false,
      macOS: false,
      linux: false,
      android: true,
      iOS: true
    }
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
