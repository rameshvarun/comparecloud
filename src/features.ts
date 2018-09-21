export interface FeatureSupported {
  support: "supported";
}

export interface FeatureUnsupported {
  support: "unsupported";
}

export interface FeaturePartiallySupported {
  support: "partiallysupported";
  description: string;
}

export type FeatureSupport =
  | FeatureSupported
  | FeatureUnsupported
  | FeaturePartiallySupported;

export function Supported(): FeatureSupported {
  return { support: "supported" };
}

export function Unsupported(): FeatureUnsupported {
  return { support: "unsupported" };
}

export function PartiallySupported(description): FeaturePartiallySupported {
  return { support: "partiallysupported", description };
}
