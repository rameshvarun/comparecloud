import {FeatureSupport} from './features';

export default interface Provider {
  readonly name: string;
  readonly url: string;
  readonly type: "personal" | "business" | "application";
  readonly icon?: string;

  readonly features: {
    rclone: FeatureSupport;
  };

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
