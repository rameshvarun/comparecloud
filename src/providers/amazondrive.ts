import { GB, TB } from "../units";
import Provider from "../provider";
import { PartiallySupported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/amazondrive.jpg";

const provider: Provider = {
  name: "Amazon Drive",
  type: "personal",
  icon,
  features: {
    rclone: PartiallySupported(
      "The Amazon Drive developer program has closed. Unless you already have keys, you will be unable to use RClone with Amazon Drive."
    ),
    videoPreviews: PartiallySupported(
      "Only videos less than 20 minutes in length and smaller than 2 GB can be streamed."
    ),
    platforms: {
      windows: true,
      macOS: true,
      android: true,
      iOS: true,
      linux: false
    }
  },
  url: "https://www.amazon.com/gp/drive/about",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(5)) {
      return 0;
    } else if (storage <= GB(100)) {
      return 11.99;
    } else if (storage <= TB(1)) {
      return 59.99;
    } else if (storage <= TB(30)) {
      return 59.99 * Math.ceil(storage / TB(1));
    }
  }
};

export default provider;
