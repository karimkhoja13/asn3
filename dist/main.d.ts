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
declare let addButton: HTMLElement | null;
declare let addForm: HTMLElement | null;
//# sourceMappingURL=main.d.ts.map