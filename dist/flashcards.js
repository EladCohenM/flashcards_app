import { FlascardsData } from "./load-data.js";
import readline from "readline";
// fetch data
const data = new FlascardsData("./data/translations.csv");
const engToHeb = data.engToHeb;
const hebToEng = data.hebToEng;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("For Hebew to English type H. For English to Hebrew type E.\n", (answer) => {
    console.log("Starting The Game");
    rl.close();
});
//# sourceMappingURL=flashcards.js.map