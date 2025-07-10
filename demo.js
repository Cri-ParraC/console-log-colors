const reset = "\x1b[0m";

// Efectos

const bright = "\x1b[1m";
console.log(`${bright}bright${reset}`);
const dim = "\x1b[2m";
console.log(`${dim}dim${reset}`);
const underscore = "\x1b[4m";
console.log(`${underscore}underscore${reset}`);
const blink = "\x1b[5m";
console.log(`${blink}blink${reset}`);
const reverse = "\x1b[7m";
console.log(`${reverse}reverse${reset}`);
const hidden = "\x1b[8m";
console.log(`${hidden}hidden${reset}`);

// Color de texto

const black = "\x1b[30m";
console.log(`${black}black${reset}`);
const red = "\x1b[31m";
console.log(`${red}red${reset}`);
const green = "\x1b[32m";
console.log(`${green}green${reset}`);
const yellow = "\x1b[33m";
console.log(`${yellow}yellow${reset}`);
const blue = "\x1b[34m";
console.log(`${blue}blue${reset}`);
const magenta = "\x1b[35m";
console.log(`${magenta}magenta${reset}`);
const cyan = "\x1b[36m";
console.log(`${cyan}cyan${reset}`);
const white = "\x1b[37m";
console.log(`${white}white${reset}`);
const gray = "\x1b[90m";
console.log(`${gray}gray${reset}`);

// Color de fondo

const bgBlack = "\x1b[40m";
console.log(`${bgBlack}bgBlack${reset}`);
const bgRed = "\x1b[41m";
console.log(`${bgRed}bgRed${reset}`);
const bgGreen = "\x1b[42m";
console.log(`${bgGreen}bgGreen${reset}`);
const bgYellow = "\x1b[43m";
console.log(`${bgYellow}bgYellow${reset}`);
const bgBlue = "\x1b[44m";
console.log(`${bgBlue}bgBlue${reset}`);
const bgMagenta = "\x1b[45m";
console.log(`${bgMagenta}bgMagenta${reset}`);
const bgCyan = "\x1b[46m";
console.log(`${bgCyan}bgCyan${reset}`);
const bgWhite = "\x1b[47m";
console.log(`${bgWhite}bgWhite${reset}`);
const bgGray = "\x1b[100m";
console.log(`${bgGray}bgGray${reset}`);