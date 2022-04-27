import { flipACoin } from "./modules/coin.mjs";
import minimist from "minimist";

var args = minimist(process.argv.slice(2))
var caller = args.call;
if ((caller == "heads") | (caller == "tails")) {
    console.log(flipACoin(caller))
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}