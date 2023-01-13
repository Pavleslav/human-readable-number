module.exports = function toReadable (number) {
        let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
        let tens = ['','', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        let stringNum = number.toString();
        if (number == 0) return 'zero';
        if (number < 20) return ones[stringNum];
        
        if ((number >= 20) && (number < 100)){
            return  (tens[stringNum[0]] + ' ' + ones[stringNum[1]]).trim();
        } else if ((number >= 100) && (stringNum[1]+stringNum[2]<20)) {
            return (ones[stringNum[0]] + ' ' + 'hundred ' + ones[+(stringNum[1]+stringNum[2])]).trim();
        } else {
            return (ones[stringNum[0]] + ' ' + 'hundred ' + tens[stringNum[1]] + ' ' + ones[stringNum[2]]).trim();
        }
}
