import TestCase from './TestCase.js';
import TestRunner from './TestRunner.js';

let hello = (name) => {
    if(!name) {
        return 'Hello!';
    }
    else {
        return `Hello ${name}!`;
    }
}

let cases = [
    new TestCase(null, "Hello!"),
    new TestCase('', "Hello!"),
    new TestCase("World", "Hello World!")
];

(new TestRunner(cases, hello)).run()
