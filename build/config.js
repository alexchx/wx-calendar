const globals = require('./globals');

module.exports.projectName = /** @type {const} */ ('wx-calendar');

module.exports.unPackGlobs = ['!src/style/**'];

module.exports.dependenciesGlobs = ['node_modules/miniprogram-api-typings/index.d.ts', 'global.d.ts'];

/**
 * 如果小程序开发工具不是默认安装位置，请设置cli路径
 * cliPath 未设置时将会在以下几个位置尝试寻找：
 * Mac：/Applications/wechatwebdevtools.app/Contents/MacOS/cli
 * Win：C:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat
 */
module.exports.cliPath; // = '/Applications/wechatwebdevtools.app/Contents/MacOS/cli';

module.exports.htmlMinConfig = {
  caseSensitive: true,
  collapseWhitespace: true,
  removeComments: true,
  keepClosingSlash: true,
  quoteCharacter: '"'
};

const jsMiniOpts = {
  compress: {
    drop_console: process.env.NODE_ENV !== 'development',
    drop_debugger: true,
    global_defs: globals,
    reduce_funcs: false,
    directives: false
  },
  mangle: {
    toplevel: true
  },
  output: {
    comments: /^!/
  }
};

module.exports.jsMiniOpts = jsMiniOpts;

module.exports.wxsMiniOpts = {
  ...jsMiniOpts,
  compress: {
    hoist_funs: true,
    join_vars: false,
    collapse_vars: false
  }
};
