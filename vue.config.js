module.exports = {
  publicPath: '/login',
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          // includePaths: [
          //   path.resolve(__dirname, 'src/core/'),
          // ],
          indentedSyntax: false,
        },
        prependData: '@import "@/../node_modules/@dynulo/ui-theme/theme.scss";',
      },
    },
  },
};
