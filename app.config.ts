import { ConfigContext, ExpoConfig } from "expo/config";

const IS_DEV = process.env.APP_VARIANT === "development";
const IS_PREVIEW = process.env.APP_VARIANT === "preview";

const getUniqueIdentifier = () => {
  if(IS_DEV){
    return "com.bio_paul.xconvert.dev"
  }
  if(IS_PREVIEW){
    return "com.bio_paul.xconvert.preview"
  }

  return "com.bio_paul.xconvert"

};

const getAppName = () => {
  if(IS_DEV){
    return "X-convert (Dev)"
  }
  if(IS_PREVIEW){
    return "X-convert (Preview)"
  }

  // : convert € to XOF <=> XOF to € 
  return "X-convert"
}
export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  "name": getAppName(),
  "slug": "x-convert",
  "version": "1.0.0",
  "orientation": "portrait",
  "icon": "./assets/images/icon.png",
  "scheme": "myapp",
  "userInterfaceStyle": "automatic",
  "newArchEnabled": true,
  "ios": {
    "supportsTablet": true,
    "bundleIdentifier": getUniqueIdentifier(),
    "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false,
    },
  },
  "android": {
    "adaptiveIcon": {
      "foregroundImage": "./assets/images/adaptive-icon.png",
      "backgroundColor": "#ffffff",
    },
    "package": getUniqueIdentifier(),
  },
  "web": {
    "bundler": "metro",
    "output": "static",
    "favicon": "./assets/images/favicon.png",
  },
  "plugins": [
    "expo-router",
    [
      "expo-splash-screen",
      {
        "image": "./assets/images/splash-icon.png",
        "imageWidth": 200,
        "resizeMode": "contain",
        "backgroundColor": "#ffffff",
      },
    ],
  ],
  "experiments": {
    "typedRoutes": true,
  },
  "extra": {
    "router": {
      "origin": false,
    },
    "eas": {
      "projectId": "e365a40a-b3e7-4021-8767-103bd39732c9",
    },
  },
  "owner": "bio_paul",
});
