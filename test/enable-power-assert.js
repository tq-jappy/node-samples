require('espower-loader')({

  cwd: process.cwd(),
  pattern: 'test/**/*.js',

  esPowerOpetions: {
    powerAssertVariableName: 'assert',
    targetMethods: {
      oneArg: [
        'ok'
      ],
      twoArgs: [
        'equal',
        'notEqual',
        'strictEqual',
        'notStrictEqual',
        'deepEqual',
        'notDeepEqual'
      ]
    }
  }
});

