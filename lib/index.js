var
path = require("path"),
vile = require("@brentlintner/vile"),
eslint = require("eslint"),
_ = require("lodash")

function punish(config) {
  // TODO: can give useEslintrc: false by default
  // TODO: ignorePath: something or nothing to make .eslintrc work
  // TODO: configFile: the config file specified, or nothing and use useEslintrc: true
  var cli = new eslint.CLIEngine({ useEslintrc: true })
  var report = cli.executeOnFiles(["."])
  var cwd = process.cwd()

  return _.flatten(report.results.map(function (result) {
    return result.messages.length > 0 ?
      result.messages.map(function (issue) {
        // NOTE: right types used here?
        return vile.issue({
          type: issue.severity == 2 ? vile.MAIN : vile.STYL,
          path: path.relative(cwd, result.filePath),
          title: issue.message,
          message: issue.message,
          signature: "eslint::" + issue.ruleId + "::" + issue.nodeType,
          where: {
            start: {
              line: issue.line,
              character: issue.column
            }
          }
        })
      }) : []
  }))
}

module.exports = {
  punish: punish
}
