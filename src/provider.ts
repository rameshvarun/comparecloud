export default interface Provider {
  readonly name: string;
  readonly url: string;
  readonly type: "personal" | "business" | "application";
  readonly icon?: string;

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
