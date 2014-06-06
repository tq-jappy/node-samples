require('espower-loader')({

  cwd: process.cwd(),
  pattern: 'test/**/*.js',

  // esPowerOptions: {
  //   powerAssertVariableName: 'assert',
  //   targetMethods: {
  //     oneArg: [
  //       'ok'
  //     ],
  //     twoArgs: [
  //       'equal',
  //       'notEqual',
  //       'strictEqual',
  //       'notStrictEqual',
  //       'deepEqual',
  //       'notDeepEqual'
  //     ]
  //   }
  // }
});

