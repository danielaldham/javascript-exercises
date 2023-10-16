const sumAll = function(start, finish) {
let sum = 0;
if (finish < start) {
    [start, finish] = [finish, start];
}
if (start < 0 || finish < 0) {
    return "ERROR"
}
if (typeof start != "number" || typeof finish != "number") {
    return "ERROR"
}
for (let i = start; i <= finish; i++) {
    sum += i;
}
return sum
};

// Do not edit below this line
module.exports = sumAll;
