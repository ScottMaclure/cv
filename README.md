# scott-cv

My personal CV, using the specification from <https://jsonresume.org/>, rendered on the server using ReactJS + node.

View online: <http://scott-cv.maclure.com.au>

## Local installation

```
npm prune
npm install
npm start
```

<http://localhost:7001>

## Test suite

Run in console using jest:

```
$ npm test

> scott-cv@0.0.1 test /path/to/scott-cv
> jest

Found 5 matching tests...
 PASS  __tests__/components/PlainText-test.js (0.328s)
 PASS  __tests__/components/EducationItem-test.js (0.593s)
 PASS  __tests__/components/Languages-test.js (0.617s)
 PASS  __tests__/components/Work-test.js (0.475s)
 PASS  __tests__/components/WorkItem-test.js (0.327s)
5 tests passed (5 total)
Run time: 2.34s
```

## Why ReactJS on the server?

I'm exploring client+server rendering these days.

ReactJS is a lovely way to build modular, testable UIs.