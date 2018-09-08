interface Supported {
  kind: "supported";
}

interface Unsupported {
  kind: "unsupported";
}

interface PartiallySupported {
  kind: "partiallysupported";
  description: string;
}

interface Unknown {
  kind: "unknown";
}

type FeatureSupport = Supported | Unsupported | PartiallySupported | Unknown;
