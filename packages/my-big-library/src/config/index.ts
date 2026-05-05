interface LibrarySettings {
  apiKey: string;
  baseUrl: string;
  debugMode: boolean;
}

let currentConfig: LibrarySettings = {
  apiKey: "",
  baseUrl: "",
  debugMode: false,
};

export const setConfigureLibrary = (settings: Partial<LibrarySettings>) => {
  currentConfig = { ...currentConfig, ...settings };
};

export const getConfig = (): LibrarySettings => {
  return currentConfig;
};


// "main": "src/index.ts",
// "types": "src/index.ts",