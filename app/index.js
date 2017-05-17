const Generator = require('yeoman-generator');
const yosay = require('yosay');
const _ = require('lodash');

module.exports = class extends Generator {
  constructor (args, opts) {
    super(args, opts);
  }

  initializing () {
    this.log(yosay('Iniciando generator'))
  }

  prompting () {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message : 'Give your project a name (kebab-case):',
      default: _.kebabCase(this.appname)
    }]).then(answers => {
      if (answers.name != "") {
        this.appname = answers.name

        this.config.set({
          name: answers.name
        });

        this.config.save();
      }
    })
  }

  writing() {
    this.fs.copy(
      this.templatePath('app/**!(node_modules)/*!(package.json)'),
      this.destinationPath(), { globOptions: { dot: true } }
    );

    this.fs.copy(
      this.templatePath('app/src/**/*'),
      this.destinationPath('src')
    );

    this.fs.copy(
      this.templatePath('app/static/**/*'),
      this.destinationPath('static')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      { name: _.kebabCase(this.appname) }
    );

    const dotfiles = [
      '.babelrc',
      '.eslintignore',
      '.eslintrc.js',
      '.gitignore',
      '.postcssrc.js',
      'index.html',
      'README.md'
    ]

    dotfiles.map(file => {
      this.fs.copy(
        this.templatePath(`app/${file}`),
        this.destinationPath(`./${file}`)
      )
    })
  }

  install() {
    this.installDependencies({bower: false, npm: false, yarn: true});
  }
}
