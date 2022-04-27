import { coinFlips,countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

var bloog = minimist(process.argv.slice(2));
var count = bloog.number;

if (count == undefined) {
    count = 1;
}
var floog = coinFlips(count)
console.log(floog)

console.log(countFlips(floog))