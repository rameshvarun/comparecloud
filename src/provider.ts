import { FeatureSupport } from "./features";

export default interface Provider {
  readonly name: string;
  readonly url: string;
  readonly type: "personal" | "business" | "application";
  readonly icon?: string;

  readonly features: {
    rclone: FeatureSupport;
    videoPreviews?: FeatureSupport;

    platforms?: {
      windows: boolean;
      macOS: boolean;
      linux: boolean;

      android: boolean;
      iOS: boolean;
    };
  };

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
