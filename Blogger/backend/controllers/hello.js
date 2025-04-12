//No undefined functions should be called.  The original code called several functions that were not defined, resulting in runtime errors.  These have been removed.

const a = 34;
const b = 12;

const d = a - b;

console.log("Subtraction is a - b = ", d);

console.log("Hey, how are you ??");