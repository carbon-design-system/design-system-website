var REACT_APP = /^REACT_APP_/i;

function getClientEnvironment(publicUrl) {
  var processEnv = Object
    .keys(process.env)
    .filter(key => REACT_APP.test(key))
    .reduce((env, key) => {
      env[key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      'NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'ENV': JSON.stringify(
        process.env.ENV || 'internal'
      ),
      'PUBLIC_URL': JSON.stringify(publicUrl)
    });
  return {'process.env': processEnv};
}

module.exports = getClientEnvironment;
