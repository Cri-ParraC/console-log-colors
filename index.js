const RESET = '\x1b[0m';
const WHITE = '\x1b[37m';
const GRAY = '\x1b[90m';
const BLUE = '\x1b[34m';
const YELLOW = '\x1b[33m';
const RED = '\x1b[31m';

const originalLog = console.log;
console.log = function (...args) {
  originalLog(`${WHITE}${args.join(' ')}${RESET}`);
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

// Pruebas con nuevos métodos
console.log('log');
console.debug('debug');
console.info('info');
console.warn('warn');
console.error('err');