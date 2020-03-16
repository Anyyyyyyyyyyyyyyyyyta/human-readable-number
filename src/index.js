
module.exports = function toReadable(num) {
    let arrayNumber = [
        ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen','fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        [' ',' ','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ]
    ];

    return hundredths(num).trim();

    function hundredths(number) {
        if(number == '0') {
            return 'zero';
        }
        if(number >= 100) {
            return arrayNumber[0][Math.floor(number / 100)] + ' ' + 'hundred' + ' ' + tenS(Math.floor(number % 100));
        } else {
            return tenS(number);
        }
    }

    function tenS(number) {
        if (number < 10) {
            return arrayNumber[0][number];
        }
        else if( number >= 20 &&  number <= 99) {
            return arrayNumber[2][Math.floor(number / 10)]  + ' ' + single(number);
        }
        else if (number >= 10 && number <= 19){
            return arrayNumber[1][number - 10];
        }
        
        
    }

    function single(number) {
        if (!number % 10) {
            return '';
        } else {
            return arrayNumber[0][number % 10];
        }
    }

}
