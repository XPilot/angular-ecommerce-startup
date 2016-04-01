// this is a metadata object which will be used both in webpack and down
// into the project via the webpack plugin (definePlugin)
module.exports = function(ENV, HMR) {
  return {
    title: 'Angular2 webstore demo',
    baseUrl: '/',
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    ENV: ENV,
    HMR: HMR,
  };
}
