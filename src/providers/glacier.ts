import { GB, TB } from "../units";
import Provider from "../provider";
import { Unsupported } from "../features";

// @ts-ignore: Can't type image.
import icon from "./icons/glacier.svg";

const provider: Provider = {
  name: "Glacier",
  type: "application",
  icon,
  features: {
    rclone: Unsupported(),
    videoPreviews: Unsupported()
  },
  url: "https://aws.amazon.com/glacier/pricing/",
  getMonthlyPrice(storage: number): number | undefined {
    return storage * 0.004;
  }
};

export default provider;
