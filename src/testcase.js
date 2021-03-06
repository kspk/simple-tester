
/**
 * @file testcase.js 
 * Defines the utility classes for writing test cases 
 * for normal and exception flows. 
 * 
 * @exports TestCase 
 * @exports TestException
 */

/**
 * @class TestCase represents a test case for a normal flow. 
 * Used by TestRunner to initiate a test against 
 * a test delegate function.
 */
class TestCase {
    /**
     * @constructor Creates a new instance of TestCase
     * @param {object} i Prescribed input for the test function
     * @param {object} o Expected output from the test function
     * @param {array} a (optional) List of arguments for the class/function that the test function tests. 
     */
    constructor(i, o, a) {
        this.input = i;
        this.output = o;
        this.args = a;

        this.type = "case";
    }
}

/**
 * @class TestException represents a test case for an exception flow.
 * Used by TestRunner to initiate a test against 
 * a test delegate function.
 */
class TestException {
    /**
     * @constructor Creates a new instance of TestException
     * @param {object} i Prescribed input for the test function
     * @param {string} e Expected exception message from the test function
     * @param {array} a (optional) List of arguments for the class/function that the test function tests. 
     */
    constructor(i, e, a) {
        this.input = i;
        this.exception = e;
        this.args = a;

        this.type = "exception";
    }
}

export { TestCase, TestException };