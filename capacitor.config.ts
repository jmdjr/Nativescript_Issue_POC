import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jmdjr_projects.app',
  appName: 'POC_APP',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
