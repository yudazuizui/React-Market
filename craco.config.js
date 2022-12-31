const path = require('path')
const CracoLess = require('craco-less')
// __dirname为当前目录 传进来一个目录与当前目录结合 当前目录为根目录
const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  plugins: [{ plugin: CracoLess }],
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
