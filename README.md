#### Especial Expo Native Wild

#### 0. Link
https://www.nativewind.dev/getting-started/expo-router

#### 1. Install NativeWind
npx expo install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

#### 2. Run pod-install to finish installation of react-native-reanimated
npx pod-install

#### 3. Setup Tailwind CSS
```
npx tailwindcss init
```

* no arquivo: tailwind.config.js
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

* no arquivo global.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

#### 4.  Add the Babel preset
* Criar o no raiz arquivo: babel.config.js
```
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};
```

#### 5. Modify your metro.config.js
```
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: "./global.css" });
```