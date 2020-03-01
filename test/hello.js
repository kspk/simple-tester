import { TestCase, TestException } from '../src/TestCase.js';
import { TestRunner } from '../src/TestRunner.js';

let hello = (name) => {
    if(!name) {
        throw "Argument exception";
    }
    else {
        return `Hello ${name}!`;
    }
}

let cases = [
    new TestException(null, "Argument exception"),
    new TestCase('', "Hello!"),
    new TestCase("World", "Hello World!")
];

process.exit((new TestRunner(cases, hello)).run());
