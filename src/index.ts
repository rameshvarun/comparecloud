interface Provider {
    readonly name: string;
    readonly url: string;

    getMonthlyPrice: (storage: number) => number;
    getYearlyPrice?: (storage: number) => number;


}
