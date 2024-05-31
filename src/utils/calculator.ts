export function electricCalculate(energyFee: number, mainHouseUnit: number, subHouseUnit: number, serviceFee: number, ft: number, vat: number) {
    const halfServiceFee: number = serviceFee / 2;
    const halfFT: number = ft / 2;
    const halfVat: number = vat / 2;

    const electricServiceFee: number = +halfServiceFee.toFixed(2) + +halfFT.toFixed(2) + +halfVat.toFixed(2);

    const energyFeeUnit: number = energyFee / mainHouseUnit;

    const mainHouseBill: number = +((+energyFeeUnit.toFixed(8) * (mainHouseUnit - subHouseUnit)) + electricServiceFee).toFixed(8);
    const subHouseBill: number = +((+energyFeeUnit.toFixed(8) * subHouseUnit) + electricServiceFee).toFixed(8);

    return {mainHouseBill, subHouseBill}
}