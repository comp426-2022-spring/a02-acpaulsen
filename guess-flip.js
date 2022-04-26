import {flipACoin} from "./modules/coin.mjs";

const require = createRequire(import.meta.url);
const args = (require("./node_modules/minimist"))(process.argv.slice(2));

var minimist = minimist(process.argv.slice(2))

var froog = args.call;
if ((froog == "heads") | (froog == "tails")) {
    console.log(flipACoin(froog))
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}