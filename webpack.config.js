module.exports = function(env) {
  global.manualHash = String(Math.floor(Math.random() * 10000000000));
  if (env && env.legacy) {
    return [
      require('./webpack/legacy'),
      require('./webpack/modern'),
    ];
  } else {
    return require('./webpack/modern');
  }

};
