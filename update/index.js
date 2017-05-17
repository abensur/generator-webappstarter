const Generator = require('yeoman-generator')
const yosay = require('yosay')
const basePath = (path) => `../../app/templates/app/${path}`

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts)
  }

  initializing () {
    this.log(yosay('Iniciando update'))
  }

  writing() {
    // Build
    this.log('updating "./build" directory')
    this.fs.copy(
      this.templatePath(basePath('build')),
      this.destinationPath('./build')
    )

    // Config
    this.log('updating "./config" directory')
    this.fs.copy(
      this.templatePath(basePath('config')),
      this.destinationPath('./config')
    )

    // Source
    this.log('updating some files in "./src" directory')
    this.fs.copy(
      this.templatePath(basePath('src/app/dashboard')),
      this.destinationPath('./src/app/dashboard')
    )
    this.fs.copy(
      this.templatePath(basePath('src/app/login')),
      this.destinationPath('./src/app/login')
    )
    this.fs.copy(
      this.templatePath(basePath('src/vuex')),
      this.destinationPath('./src/vuex')
    )

    this.fs.copy(
      this.templatePath(basePath('src/api.conf.js')),
      this.destinationPath('./src/api.conf.js')
    )
    this.fs.copy(
      this.templatePath(basePath('src/auth.js')),
      this.destinationPath('./src/auth.js')
    )
    this.fs.copy(
      this.templatePath(basePath('src/utils.js')),
      this.destinationPath('./src/utils.js')
    )

    // Static
    this.log('updating "./static" directory')
    this.fs.copy(
      this.templatePath(basePath('static')),
      this.destinationPath('./static')
    )

    // Dotfiles
    this.log('updating some files in "./" directory')

    const dotfiles = [
      '.babelrc',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.postcssrc.js'
    ]

    dotfiles.map(file => {
      this.fs.copy(
        this.templatePath(basePath(`${file}`)),
        this.destinationPath(`./${file}`)
      )
    })

  }
}
