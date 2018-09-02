function TB(tb: number) {
  return tb * 1000;
}

function GB(gb: number) {
  return gb * 1000;
}

export var name = "Amazon Drive";

export function getYearlyPrice(storage: number): number | undefined {
  if (storage <= 5) {
    return 0;
  } else if (storage <= GB(100)) {
    return 11.99;
  } else if (storage <= TB(1)) {
    return 59.99;
  } else if (storage <= TB(30)) {
    return 59.99 * Math.ceil(storage / TB(1));
  }
}
