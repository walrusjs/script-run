import { execa } from '@walrus/cli-utils';

export function scriptRun() {
  const argv = process.argv;
  argv.splice(0, 3)

  execa.sync(
    'node',
    [
      '--unhandled-rejections=strict',
      '-r',
      require.resolve('./swc-register'),
      ...argv
    ],
    {
      cwd: process.cwd(),
      env: process.env,
      stdio: 'inherit',
    },
  )
}

export default scriptRun;
