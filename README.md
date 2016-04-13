# scott-cv

My personal CV, using the specification from <https://jsonresume.org/>, rendered on the server using ReactJS + node.

View online: <http://scott.maclure.com.au>

## Local installation

```
npm prune && npm install && npm start
```

<http://localhost:7001>


## Test suite

By default, `npm test` will provide a coverage report. Bypass this by directly calling Jest: `./node_modules/.bin/jest`

You can view coverage here: <http://localhost:7001/lcov-report/>

## Why ReactJS on the server?

I'm exploring client+server rendering these days - "universal rendering" I've heard it called.

ReactJS is a lovely way to build modular, testable UIs.
