let dict = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
};
let res = "";
for (i = 2; i < process.argv.length; i++) {
    let number = process.argv[i];
    for (j = 0; j < number.length; j++) {
        res += dict[number[j]];
    }
    if (i != process.argv.length - 1) {
        res += ",";
    }
}
console.log(res);
