export default interface Provider {
  readonly name: string;
  readonly url: string;
  readonly type: "personal" | "business" | "application";

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
