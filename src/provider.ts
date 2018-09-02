export default interface Provider {
  readonly name: string;
  readonly url: string;

  getMonthlyPrice?: (storage: number) => number | undefined;
  getYearlyPrice?: (storage: number) => number | undefined;
}
