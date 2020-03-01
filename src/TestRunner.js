import { TestCase, TestException } from "./TestCase.js";

class TestRunner {
    cases = [];
    method = null;

    constructor(cases, method) {
        this.cases = cases;
        this.method = method;
    }

    run() {
        let passed = 0;
        let count = 0;
        (this.cases).forEach(c => {
            count++;
            let result = null;
            try
            {
                result = this.method(c.input);
                console.log(`Test case #${count} - Input: ${JSON.stringify(c.input)}, Expected result: ${JSON.stringify(c.output)}, Actual result: ${JSON.stringify(result)}.`);
                if(result === c.output) {
                    passed++;
                }
                else {
                    console.log("%cTest Failed.", "color:red");
                }
            }
            catch(e)
            {
                if(c.type === "exception" && c.e == e.message) {
                    console.log(`Test case #${count} - Input: ${JSON.stringify(c.input)}, Expected result: ${c.exception}, Actual result: ${e}.`);
                    passed++;
                }
                else {
                    console.log("%cTest Failed.", "color:red");
                }
            }
        });

        console.log(`Tests: ${passed} passed, ${count} total.`);
        return count - passed;
    }
}

export { TestRunner };