const regRGBIntegers = (numberArray: number[]) =>
  numberArray.length < 256
    ? regRGBIntegers(numberArray.concat([numberArray.length]))
    : numberArray;

const genRgbType = () => {
  const acc = "type RGBInteger =";
  const integers = regRGBIntegers([]);
  return integers.reduce((acc, curInt) => acc + " | " + curInt.toString(), acc);
};
