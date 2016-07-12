var
path = require("path"),
vile = require("@forthright/vile"),
eslint = require("eslint"),
_ = require("lodash")

function punish(config) {
  var allow = _.get(config, "allow", [])
  var ignore = _.isEmpty(allow) ? _.get(config, "ignore", []) : undefined
  var targets = _.isEmpty(allow) ? ["."] : allow

  var cli = new eslint.CLIEngine({
    ignorePattern: ignore,
    useEslintrc: true
  })

  var report = cli.executeOnFiles(targets)
  var cwd = process.cwd()

  return _.flatten(_.map(report.results, function (result) {
    return _.map(result.messages, function (issue) {
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
      })
  }))
}

module.exports = {
  punish: punish
}
