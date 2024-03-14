module.exports = {
    // ... other configurations
    module: {
      rules: [
        {
          test: /\.(mp4)$/,
          use: 'file-loader',
        },
      ],
    },
  };
  