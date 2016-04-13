# scott-cv

My personal CV, using the specification from <https://jsonresume.org/>, rendered on the server using ReactJS + node.

View online: <http://scott.maclure.com.au>

## Local installation

```
npm prune && npm install && npm start
```

<http://localhost:7001>


## Test suite

```
# Run this by default. Will output coverage report.
npm test

# Run test suite without coverage (faster)
./node_modules/.bin/jest

# Run only recently changed files
 ./node_modules/.bin/jest -o
```

You can view coverage here: <http://localhost:7001/lcov-report/>

## Why ReactJS on the server?

I'm exploring client+server rendering these days - "universal rendering" I've heard it called.

ReactJS is a lovely way to build modular, testable UIs.
