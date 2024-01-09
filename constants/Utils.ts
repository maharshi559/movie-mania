export const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export const removeDuplicates = (arg: any[]): any[] => arg.filter((val: any, index: number) => arg.indexOf(val) === index);

export function getRandom(arr: any[], n: number) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}