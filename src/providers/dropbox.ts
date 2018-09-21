import { GB, TB } from "../units";
import Provider from "../provider";
import { Supported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/dropbox.svg";

const provider: Provider = {
  name: "Dropbox",
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
      linux: true
    }
  },
  url: "https://www.dropbox.com/",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(2)) {
      return 0;
    } else if (storage <= TB(1)) {
      return 8.25 * 12;
    } else if (storage <= TB(2)) {
      return 16.58 * 12;
    }
  }
};

export default provider;
