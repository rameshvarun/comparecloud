import { GB, TB } from "../units";

import Provider from "../provider";
import { Supported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/googleone.png";

const provider: Provider = {
  name: "Google One",
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
  url: "https://one.google.com/about",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(15)) {
      return 0;
    } else if (storage <= GB(100)) {
      return 19.99;
    } else if (storage <= GB(200)) {
      return 29.99;
    } else if (storage <= TB(2)) {
      return 99.99;
    } else if (storage <= TB(10)) {
      return 99.99 * 12;
    } else if (storage <= TB(20)) {
      return 199.99 * 12;
    } else if (storage <= TB(30)) {
      return 299.99 * 12;
    }
  }
};

export default provider;
