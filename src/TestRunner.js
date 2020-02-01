import TestCase from "./TestCase.js";

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
        (this.cases).forEach(element => {
            count++;
            let result = this.method(element.input);
            console.log(`Test case #${count} - Input: ${JSON.stringify(element.input)}, Expected result: ${JSON.stringify(element.output)}, Actual result: ${JSON.stringify(result)}.`);
            if(result === element.output) {
                passed++;
            }
            else {
                console.log("%cTest Failed.", "color:red");
            }
        });

        console.log(`Tests: ${passed} passed, ${count} total.`);
    }
}

export default TestRunner;