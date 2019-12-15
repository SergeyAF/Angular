//palindrom

let testString: string = 'axbbxa'; 

function checkPalindrom(str: string): boolean {
    let revStr = str.split('').reverse().join('');
    return str === revStr;
}
console.log(checkPalindrom(testString));

// Fibonacci

let testNumber: number = 5;

function fiboSeqence(num:number): number[] {
    let fiboArray: number[] = [1, 1];
    if (num < 2) return [];
    let i = 2;
    while (fiboArray[i-2] + fiboArray[i-1] < num) {
        fiboArray.push(fiboArray[i-2] + fiboArray[i-1]);
        i++;
    }
    return fiboArray;
}
console.log(fiboSeqence(testNumber));
