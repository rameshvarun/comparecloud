import { GB, TB } from "../units";
import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from "./icons/box.png";

const provider: Provider = {
  name: "Box",
  type: "personal",
  icon,
  features: {
    rclone: true
  },
  url: "https://www.box.com/",
  getMonthlyPrice(storage: number): number | undefined {
    if (storage <= GB(10)) {
      return 0;
    } else if (storage <= GB(100)) {
      return 10;
    }
  }
};

export default provider;
