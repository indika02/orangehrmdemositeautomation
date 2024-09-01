module.exports = {
    default: {
      require: ['stepDefinitions/*.js'],
      format: ['html:reports/cucumber-html-report.html'], 
      publishQuiet: true, 
    },
  };
  