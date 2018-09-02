import { GB, TB, Euro } from "../units";

import Provider from "../provider";

const provider: Provider = {
  name: "Mega",
  url: "https://mega.nz/",
  type: "personal",
  getMonthlyPrice(storage: number): number | undefined {
    if (storage <= GB(50)) {
      return 0;
    } else if (storage <= GB(200)) {
      return Euro(4.99);
    } else if (storage <= TB(1)) {
      return Euro(9.99);
    } else if (storage <= TB(4)) {
      return Euro(19.99);
    } else if (storage <= TB(8)) {
      return Euro(29.99);
    }
  }
};

export default provider;
