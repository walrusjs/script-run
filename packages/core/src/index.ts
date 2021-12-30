import path from 'path';
import { execa, chalk, fsExtra } from '@walrus/cli-utils';

const register = require.resolve('esbuild-register')

/**
 * 运行脚本
 * @param argv argv[0] 为要执行脚本的文件路径
 */
export function scriptRun(argv: string[]) {
  const scriptFilePath = argv[0];

  if (!fsExtra.existsSync(path.resolve(scriptFilePath))) {
    console.log(chalk.red(`>> run: 脚本不存在，请检查`));

    process.exit(1);
  }

  execa.sync(
    'node',
    [
      '--unhandled-rejections=strict',
      '-r',
      register,
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
