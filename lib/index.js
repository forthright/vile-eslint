var
path = require("path"),
vile = require("@brentlintner/vile"),
eslint = require("eslint"),
_ = require("lodash")

function punish(config) {
  // TODO: can give useEslintrc: false by default
  // ignorePath: something or nothing to make .eslintrc work
  // configFile: the config file specified, or nothing and use useEslintrc: true
  var cli = new eslint.CLIEngine({ useEslintrc: true })
  var report = cli.executeOnFiles(["."])
  var cwd = process.cwd()

  return _.flatten(report.results.map(function (result) {
    return result.messages.length > 0 ?
      result.messages.map(function (issue) {
        return vile.issue(
          issue.severity == 2 ? vile.ERROR : vile.WARNING,
          path.relative(cwd, result.filePath),
          issue.message,
          { line: issue.line, character: issue.column }
        )
      }) :
      [ vile.issue(vile.OK, result.filePath) ]
  }))
}

module.exports = {
  punish: punish
}
