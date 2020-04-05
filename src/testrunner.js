/**
 * @file testrunner.js
 * Defines a utility class for running simple unit tests 
 * for javascript functions.
 * 
 * @exports TestRunner
 */

import { TestCase, TestException } from "./testcase.js";

/**
 * @class TestRunner represents the utility test runner
 * Uses a list of TestCase and TestException to 
 * run test cases against a specified function.
 */
class TestRunner {
    /**
     * @constructor Creates a new instance of TestRunner
     * @param {array} cases List of test cases, specified as instances of TestCase and TestException
     * @param {function} method The method that executes the javascript unit tests
     */
    constructor(cases, method) {
        this.cases = cases;
        this.method = method;
    }

    /**
     * Runs the test cases against the specified function
     * returns the count of failed tests, and logs the test runs to console. 
     * 
     * @returns {number} count of failed test cases. 
     */
    run() {
        let passed = 0;
        let count = 0;

        /** For each test case execute the tester function delegate */
        (this.cases).forEach(c => {
            count++;
            let result = null;
            
            try
            { /** Guard against any test failures and allow for checking for exception flows */
                result = this.method(c.input, c.args);
                console.log(`Test case #${count} - Input: values - ${JSON.stringify(c.input)}; args - ${JSON.stringify(c.args)}, Expected result: ${JSON.stringify(c.output)}, Actual result: ${JSON.stringify(result)}.`);
                if(result === c.output) {
                    passed++;
                }
                else {
                    console.log("%cTest Failed.", "color:red");
                }
            }
            catch(e)
            { /** Now that there has been an exception, check if this was expected exception, otherwise the test failed. */
                let m = e.message ? e.message : e;
                if(c.type === "exception" && c.e == e.message) {
                    console.log(`Test case #${count} - Input: values - ${JSON.stringify(c.input)}; args - ${JSON.stringify(c.args)}, Expected result: ${c.exception}, Actual result: ${m}.`);
                    passed++;
                }
                else {
                    console.log(`Test case #${count} - Input: values - ${JSON.stringify(c.input)}; args - ${JSON.stringify(c.args)}, Expected result: ${c.output}, Actual result: ${m}.`);
                    console.log("%cTest Failed.", "color:red");
                }
            }
        });

        /** Log the final result and return the failed tests count. */
        console.log(`Tests: ${passed} passed, ${count} total.`);
        return count - passed;
    }
}

export { TestRunner };