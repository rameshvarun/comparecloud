export var name = "Dropbox (Individuals)";

export function getMonthlyPrice(storage: number): number | undefined {
  if (storage <= 2) {
    return 0;
  } else if (storage <= 1000) {
    return 9.99;
  } else if (storage <= 2000) {
    return 19.99;
  }
}
