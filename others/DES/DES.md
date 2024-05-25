This function permutes the key.
```
function k_permuted_choice_one() {
  console.log("This will permute the key");
  const pc1_table = [
    57, 49, 41, 33, 25, 17, 9, 1, 58, 50, 42, 34, 26, 18, 10, 2, 59, 51, 43, 35,
    27, 19, 11, 3, 60, 52, 44, 36, 63, 55, 47, 39, 31, 23, 15, 7, 62, 54, 46,
    38, 30, 22, 14, 6, 61, 53, 45, 37, 29, 21, 13, 5, 28, 20, 12, 4,
  ];
  const original_key =
    "1100100000111111101010010010011010101110110110111010011111100100";
  const original_key_arr = original_key.split("");
  let permuted_key = [];
  for (const element of pc1_table) {
    permuted_key.push(original_key_arr[element - 1]);
  }
  console.log(permuted_key.join(""));
}

k_permuted_choice_one();
```
