function HexToDec(args) {
    const hexNum = args[0].toString();
    const hexNumLen = hexNum.length;
    let decNum = 0;

    for (let i = 0; i < hexNumLen; i += 1) {
        let hexDigit = hexNum[i];
        switch (hexDigit) {
            case 'A': hexDigit = 10; break;
            case 'B': hexDigit = 11; break;
            case 'C': hexDigit = 12; break;
            case 'D': hexDigit = 13; break;
            case 'E': hexDigit = 14; break;
            case 'F': hexDigit = 15; break;
            default: break;
        }
        decNum = +hexDigit + decNum * 16;
    }
    console.log(decNum);
}
const arr = Array;
arr[0] = '4ED528CBB4';
HexToDec(arr);
