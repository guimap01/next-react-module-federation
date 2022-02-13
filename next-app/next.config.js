const nextConfig = {
  webpack5: true,

  webpack: (config, options) => {
    config.plugins.push(
      new options.webpack.container.ModuleFederationPlugin({
        name: 'app2',
        remoteType: 'var',
        remotes: {
          DummyPage: 'app2',
        },
        exposes: {},
        shared: [
          {
            react: {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
          {
            'react-dom': {
              eager: true,
              singleton: true,
              requiredVersion: false,
            },
          },
        ],
      })
    );
    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });
    return config;
  },
};

module.exports = nextConfig;
