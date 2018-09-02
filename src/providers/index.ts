import Provider from "../provider";

import amazondrive from "./amazondrive";
import dropbox from "./dropbox";
import googleone from "./googleone";
import box from "./box";
import mega from "./mega";
import sync from "./sync";

const providers: Array<Provider> = [
  amazondrive,
  dropbox,
  googleone,
  box,
  mega,
  sync
];

export default providers;
