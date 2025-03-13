export default ({ config }) => ({
  ...config,
  name: 'HelloWorld',
  slug: 'expo-template-blank-typescript',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/dev/icon.png',
  newArchEnabled: true,
  splash: {
    image: './assets/dev/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/dev/adaptive-icon.png',
      backgroundColor: '#FFFFFF',
    },
  },
  web: {
    favicon: './assets/dev/favicon.png',
  },
});
