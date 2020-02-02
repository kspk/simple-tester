# Simple Tester
A very simple javascript library for running unit tests for other javascript modules. 

![simple-tester](https://github.com/kspk/simple-tester/workflows/simple-tester/badge.svg?branch=master)

## Usage
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

## License
Simple Tester is licensed with [MIT License](LICENSE).