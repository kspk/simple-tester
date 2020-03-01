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
let hello = (name) => {
    if(!name) {
        throw "Argument exception";
    }
    else {
        return `Hello ${name}!`;
    }
}

/** @constant POSITIVE_TESTS Count of positive tests for simple-tester. */
let POSITIVE_TESTS = 2;
/** @constant NEGATIVE_TESTS Count of negative tests for simple-tester. */
let NEGATIVE_TESTS = 1;

/** @constant cases List of test cases for simple-tester. */
let cases = [
    /** Positive tests */
    new TestException(null, "Argument exception"),
    new TestCase("World", "Hello World!"),

    /** Negative tests */
    new TestCase('', "Hello!")
];

/**
 * Test the tester. 
 * 
 * There are intentionally 2 passing and 1 failing tests 
 * included in the test run above. 
 * 
 * Check we have the correct count.
 */
let result = (new TestRunner(cases, hello)).run();
process.exit(result == POSITIVE_TESTS - NEGATIVE_TESTS ? 0 : result);
