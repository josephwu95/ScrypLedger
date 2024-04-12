import { consoleTransport, logger as log } from 'react-native-logs';

// TODO: Customize logger to use Bugsnag or Sentry in production
// https://www.npmjs.com/package/react-native-logs#logs-only-in-development-mode

type LevelSecurity = 'debug' | 'info' | 'warn' | 'error' | 'emergency';

// Note if you want to hide the logs for certain level, you can change the level security.
let LEVEL_SECURITY: LevelSecurity = 'debug';

if (!__DEV__) {
  // In production, we only want to log errors.
  LEVEL_SECURITY = 'error';
}

const config = {
  levels: {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
    emergency: 4,
  },
  transport: consoleTransport,
  transportOptions: {
    colors: {
      debug: 'default',
      info: 'blueBright',
      warn: 'yellowBright',
      error: 'redBright',
      emergency: 'red',
    },
  },
};

const logger = log.createLogger(config);
logger.setSeverity(LEVEL_SECURITY);

export { logger };
