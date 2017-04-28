node-samples
============

Node.js samples and unit tests.

| Folder| Description |
|:------|:------------|
| ``test/core`` | JavaScript standards |
| ``test/file`` | File I/O ( `fs` module) |
| ``test/http_request`` | HTTP request ( `request`, `http` module) |


Unit tests use following libraries:

- [Mocha](http://mochajs.org/)
- [power-assert](https://github.com/twada/power-assert.git)
- [espower-coffee](https://github.com/twada/espower-coffee)

## Setup

```
$ npm install -g mocha
$ npm install
```

## Run Tests

To run all tests:

```
$ mocha test
```

or 

```
$ mocha
```

To run specific test:

```
$ mocha path/to/target_test_dir_or_file
```

