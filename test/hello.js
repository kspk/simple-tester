import TestCase from '../src/TestCase.js';
import TestRunner from '../src/TestRunner.js';

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
    new TestCase("World", "Hello World!"),
    new TestCase("a", "b")
];

process.exit((new TestRunner(cases, hello)).run());
