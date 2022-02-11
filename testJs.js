// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
    // Your Code Here
    input = input.sort((a, b) => a - b);
    if (input.length % 2 !== 0) {
        return input[Math.floor(input.length / 2)];
    } else {
        let mid1 = input[input.length / 2];
        return [mid1];
    }

}

console.log(result(input));

