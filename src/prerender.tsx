import * as React from "react";
import { renderToString } from "react-dom/server";

import { App } from "./app";

export default () => renderToString(<App />);
