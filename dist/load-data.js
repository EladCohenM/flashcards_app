import assert from "node:assert";
import fs from "fs";
import Papa from "papaparse";
export class FlascardsData {
    csvText;
    parseResult;
    words;
    engToHeb;
    hebToEng;
    constructor(file) {
        this.csvText = fs.readFileSync(file, "utf8");
        this.parseResult = Papa.parse(this.csvText);
        this.words = this.parseResult['data'];
        // structure the data in records
        const builtEngToHeb = {};
        const builtHebToEng = {};
        for (const definition of this.words) {
            if (!this.isStringArray(definition))
                assert.fail("definition is not a string array");
            if (definition[0] === 'אנגלית' && definition[1] === 'עברית') {
                builtEngToHeb[definition[2]] = definition[3];
                builtHebToEng[definition[3]] = definition[2];
            }
            else {
                // correct the data and add to the records
                [definition[2], definition[3]] = [definition[3], definition[2]];
                definition[0] = 'אנגלית';
                definition[1] = 'עברית';
                builtEngToHeb[definition[2]] = definition[3];
                builtHebToEng[definition[3]] = definition[2];
            }
        }
        this.engToHeb = Object.freeze(builtEngToHeb);
        this.hebToEng = Object.freeze(builtHebToEng);
    }
    isStringArray(value) {
        return Array.isArray(value) && value.every(item => typeof item === 'string');
    }
}
//# sourceMappingURL=load-data.js.map