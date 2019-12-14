//palindrom

let testString: string = 'axbbxa' 

function checkPalindrom(str: string): boolean {
    let revStr = str.split('').reverse().join('');
    if  (str === revStr) {
        return true;
    }
    return false;    
}

console.log(checkPalindrom(testString));

// Fibonacci

let testNumber: number = 3;

function fiboSeqence(num:number): number[] {
    let fiboArray: number[] = [];
    if (num < 2) return fiboArray;
    fiboArray.push(1);
    let a = 0;
    let b = 1;
    for (let i = 1; i < num; i++) {
        let c = a + b;
        if (c < num) {
            fiboArray.push(c);
            a = b;
            b = c;
        } else {
            return fiboArray}
    }
    return fiboArray;
}

console.log(fiboSeqence(testNumber));
