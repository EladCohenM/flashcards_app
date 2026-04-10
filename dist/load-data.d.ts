export declare class FlascardsData {
    private readonly csvText;
    private readonly parseResult;
    private readonly words;
    readonly engToHeb: Readonly<Record<string, string>>;
    readonly hebToEng: Readonly<Record<string, string>>;
    constructor(file: string);
    isStringArray(value: unknown): value is [string, string, string, string];
}
//# sourceMappingURL=load-data.d.ts.map