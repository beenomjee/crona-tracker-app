export default function (number) {
  let number2 = String(number);
  let flag = 0;
  let rslt = "";
  for (let i = number2.length - 1; i >= 0; i--) {
    if (flag == 3) {
      flag = 0;
      rslt = "," + rslt;
    }
    rslt = number2[i] + rslt;
    flag++;
  }
  return rslt;
}
