interface IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    displayInfo(): string;
}
declare class GreyPig implements IPig {
    name: string;
    breed: string;
    height: number;
    weight: number;
    personality: string;
    swimmingAbility: number;
    constructor(name: string, breed: string, height: number, weight: number, personality: string, swimmingAbility: number);
    displayInfo(): string;
}
declare var pigs: IPig[];
declare const elem: any;
//# sourceMappingURL=main.d.ts.map