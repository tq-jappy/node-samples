node-samples
============

Node.js samples and unit tests.

| Folder| Description |
|:------|:------------|
| ``test/core`` | JavaScript standards |
| ``test/file`` | File I/O ( `fs` module) |
| ``test/http_request`` | HTTP request ( `request`, `http` module) |


Unit testing use following libraries:

- [Mocha](http://visionmedia.github.io/mocha/)
- [power-assert](https://github.com/twada/power-assert.git)

## Setup

```
$ npm install -g mocha
$ npm install
```

## Run Tests

To run all tests,

```
$ mocha test
```

To run specific test, 

```
$ mocha path/to/test_dir_or_file
```
