/**
 * @file hello.js
 * Provides a rudimentry test for the simple-tester. 
 */

import { TestCase, TestException } from '../src/testcase.js';
import { TestRunner } from '../src/testrunner.js';

/**
 * @function hello A test function for simple-tester. 
 * Allows testing of a common flow and an exception path.
 * 
 * @param {string} name any random string value
 */
let hello = (name, args) => {
    if(!args) {
        if(!name) {
            throw "Argument exception";
        }
        else {
            return `Hello ${name}!`;
        }
    }
    else {
        let tc = new (args[0].bind.apply(args[0], args))();
        return tc.toString();
    }
}

/**
 * @class TestClass to write tests for optional arguments 
 */
class TestClass
{
    /**
     * @constructor Creates a new instance of TestClass
     * @param {object} value optional test arguments from the test cases
     */
    constructor(v1, v2)
    {
        this.values = [];
        this.values.push(v1);
        this.values.push(v2);
    }

    /**
     * Returns a string representation of the TestClass.
     * @override
     * @returns {string} A string representation of the TestClass values.
     */
    toString()
    {
        return JSON.stringify(this.values);
    }
}

/** @constant NEGATIVE_TESTS Count of negative tests for simple-tester. */
let NEGATIVE_TESTS = 1;

/** @constant cases List of test cases for simple-tester. */
let cases = [
    /** Positive tests */
    new TestException(null, "Argument exception"),
    new TestCase("World", "Hello World!"),
    new TestCase(null, "[1,2]", [TestClass,1,2]),

    /** Negative tests */
    new TestCase('', "Hello!")
];

/**
 * Test the tester. 
 * 
 * There are intentionally 3 passing and 1 failing tests 
 * included in the test run above. 
 * 
 * Check we have the correct count of negative tests.
 */
let result = (new TestRunner(cases, hello)).run("Test the tester!");
process.exit(result == NEGATIVE_TESTS ? 0 : result);
