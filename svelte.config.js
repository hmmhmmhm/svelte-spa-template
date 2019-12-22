const pyoner = require("@pyoner/svelte-ts-preprocess")
const { scss, postcss } = require('svelte-preprocess')
const autoprefixer = require('autoprefixer')

let env = pyoner.createEnv()
const compilerOptions = pyoner.readConfigFile(env)
const opts = {
  env,
  compilerOptions: {
    ...compilerOptions,
    allowNonTsExtensions: true
  }
}

// For svelte-vscode
let configJs = { preprocess: pyoner.preprocess(opts) }

if (process.argv[1].indexOf('--') != -1) {
  configJs = {
    preprocess: [
      scss(),
      postcss({
        plugins: [
          autoprefixer()
        ]
      }),
      pyoner.preprocess(opts)
    ]
  }
}
module.exports = configJs