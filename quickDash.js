let str = '5 of The Best: Fashion and beauty combos that just work – every. single. time.';
str = str.toLowerCase();

str = str.replace(/'/g, '');
str = str.replace(/"/g, '');
str = str.replace(/’/g, '');
str = str.replace(/;/g, '');
str = str.replace(/&/g, '');
str = str.replace(/@/g, '');
str = str.replace(/\?/g, '');
str = str.replace(/\+/g, '');
str = str.replace(/=/g, '');
str = str.replace(/_/g, '');
str = str.replace(/\//g, '');
str = str.replace(/\\/g, '');
str = str.replace(/#/g, '');
str = str.replace(/\./g, '');
str = str.replace(/\^/g, '');
str = str.replace(/\*/g, '');
str = str.replace(/\`/g, '');
str = str.replace(/:/g, '');
str = str.replace(/!/g, '');
str = str.replace(/\(/g, '');
str = str.replace(/\)/g, '');
str = str.replace(/£/g, '');
str = str.replace(/\$/g, '');

str = str.replace(/\s+/g, '-')
console.log(str)

// const symbolsArray = [
// "/'/g",
// '/"/g',
// "/’/g",
// "/;/g",
// "/&/g",
// "/@/g",
// "/\?/g",
// "/\+/g",
// "/=/g",
// "/_/g",
// "/\//g",
// "/\\/g",
// "/#/g",
// "/\./g",
// "/\^/g",
// "/\*/g",
// "/\`/g",
// "/:/g",
// "/!/g",
// "/\(/g",
// "/\)/g",
// "/£/g",
// "/\$/g",
// ]


// symbolsArray.forEach((regex)=>{
//     str = str.replace(regex, '');
// })