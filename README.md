# Javascript benchmark

This repo is a benchmark of different methods in javascript in order to make faster algorithms in [LeetCode](https://leetcode.com/u/Charles-Chrismann/) problems.

This repo is for runtime performances only (for now), remember that memory usage is an other important part of performances and optimization.

This repo is an experiment only, it does not claim to be the universal truth.

Feel free to submit other benchmarks, modification on existing benchmarks, tools or suggestions

## Benchmarks

### Iterate over array: for vs .forEach vs for const of vs for let of

Results with $10^6$ elements:

|Method|duration (ms)|
|------|-------------|
|for|1.8127000331878662|
|.forEach|7.88349986076355|
|for let of|16.16820001602173|
|for const of|14.326500177383423|

### Read char from string: str[] vs str.charAt

Results with a $10^6$ string length:

|Method|duration (ms)|
|------|-------------|
|str[]|4.303499937057495|
|.charAt|11.126199960708618|

TO BENCH

charCodeAt(0, 1, 2, 3 ...) vs loop charCodeAt(0)

map vs {}

loop if else vs loop if continue

++ vs += 1 on variables & obj[]
