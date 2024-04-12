const { getDefaultConfig } = require('expo/metro-config');

// Get the default Expo Metro configuration
const defaultConfig = getDefaultConfig(__dirname);

// Add 'db' as a new recognized asset extension
defaultConfig.resolver.assetExts.push('db');

// Ensure 'mjs' files are treated as source files
if (!defaultConfig.resolver.sourceExts.includes('mjs')) {
    defaultConfig.resolver.sourceExts.push('mjs');
}

module.exports = defaultConfig;
