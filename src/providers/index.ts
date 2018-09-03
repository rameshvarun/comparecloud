import Provider from "../provider";

import amazondrive from "./amazondrive";
import dropbox from "./dropbox";
import googleone from "./googleone";
import box from "./box";
import mega from "./mega";
import sync from "./sync";
import onedrive from "./onedrive";
import icloud from "./icloud";
import sugarsync from "./sugarsync";
import pcloud from "./pcloud";
import idrive from "./idrive";
import tresorit from "./tresorit";

import b2 from "./b2";
import s3 from "./s3";
import glacier from "./glacier";

const providers: Array<Provider> = [
  amazondrive,
  dropbox,
  googleone,
  box,
  mega,
  sync,
  onedrive,
  icloud,
  sugarsync,
  pcloud,
  idrive,
  b2,
  glacier,
  s3,
  tresorit
];

export default providers;
