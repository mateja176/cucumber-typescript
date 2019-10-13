const common = [
  '--require-module ts-node/register',
  '--require features/step_definitions/**/*.ts',
  `--format ${
    process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
  }`,
].join(' ');

module.exports = {
  default: common,
};
