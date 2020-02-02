# Simple Tester
A very simple javascript library for running unit tests for other javascript modules. 

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
JS-DS is licensed with [MIT License](LICENSE).