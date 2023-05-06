import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'the-garden-guide',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
