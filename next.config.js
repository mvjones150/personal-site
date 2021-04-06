const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'css'),
      path.join(__dirname, 'components/*'),
    ],
  },
};
