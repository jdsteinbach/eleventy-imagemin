const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');

module.exports = class {
  async data() {
    return {
      permalink: data => `img/${data.i}`,
      pagination: {
        data: 'images',
        size: 1,
        alias: 'i'
      }
    };
  }

  async render(data) {
    const img = await imagemin(
      [`assets/img/${data.i}`],
      {
        plugins: [
          imageminJpegtran(),
          imageminPngquant(),
        ]
      }
    );
    return img.length > 0
      ? img[0].data
      : undefined;
  }
};
