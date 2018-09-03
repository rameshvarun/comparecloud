import { GB, TB } from "../units";
import Provider from "../provider";

// @ts-ignore: Can't type image.
import icon from './icons/tresorit.png';

const provider: Provider = {
  name: "Tresorit",
  type: "personal",
  icon,
  url: "https://tresorit.com/pricing",
  getYearlyPrice(storage: number): number | undefined {
    if (storage <= GB(200)) {
      return 10.42 * 12;
    } else if (storage <= TB(2)) {
      return 24 * 12;
    }
  }
};

export default provider;
