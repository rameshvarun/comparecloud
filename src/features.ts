export interface Supported {
  support: "supported";
}

export interface Unsupported {
  support: "unsupported";
}

export interface PartiallySupported {
  support: "partiallysupported";
  description: string;
}

export interface Unknown {
  support: "unknown";
}

export type FeatureSupport =
  | Supported
  | Unsupported
  | PartiallySupported
  | Unknown;
