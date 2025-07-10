const BLUE = '\x1b[34m';
const CYAN = "\x1b[36m";
const GRAY = '\x1b[90m';
const RED = '\x1b[31m';
const RESET = '\x1b[0m';
const WHITE = '\x1b[37m';
const YELLOW = '\x1b[33m';

const originalLog = console.log;
console.log = (...args) => {
  const output = args.join(' ');
  const isLogpoint = /logpoint/i.test(output);
  const color = isLogpoint ? CYAN : WHITE;
  originalLog(`${color}${output}${RESET}`);
};

const originalDebug = console.debug;
console.debug = function (...args) {
  originalDebug(`${GRAY}${args.join(' ')}${RESET}`);
};

const originalInfo = console.info;
console.info = function (...args) {
  originalInfo(`${BLUE}${args.join(' ')}${RESET}`);
};

const originalWarn = console.warn;
console.warn = function (...args) {
  originalWarn(`${YELLOW}${args.join(' ')}${RESET}`);
};

const originalError = console.error;
console.error = function (...args) {
  originalError(`${RED}${args.join(' ')}${RESET}`);
};