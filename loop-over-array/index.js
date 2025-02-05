import _for from "./for.js";
import forEach from "./forEach.js";
import time from '../time.js'
import forOfLet from "./for-of-let.js";
import forOfConst from "./for-of-const.js";

const arr = Array.from({length: 1000000}, () => 0)

console.log(time(_for, arr))
console.log(time(forEach, arr))
console.log(time(forOfLet, arr))
console.log(time(forOfConst, arr))