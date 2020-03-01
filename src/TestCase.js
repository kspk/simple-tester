
class TestCase {
    constructor(i, o) {
        this.input = i;
        this.output = o;

        this.type = "case";
    }
}

class TestException {
    constructor(i, e) {
        this.input = i;
        this.exception = e;

        this.type = "exception";
    }
}

export { TestCase, TestException };