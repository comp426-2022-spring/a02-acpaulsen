import {flipACoin} from "./modules/coin.mjs";
import minimist from "minimist";
var gloog = minimist(process.argv.slice(2))

var froog = gloog.call;
if ((froog == "heads") | (froog == "tails")) {
    console.log(flipACoin(froog))
}
else {
    console.log("Error: no input.\nUsage: node guess-flip --call=[heads|tails]")
}