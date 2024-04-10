import React, { useEffect } from 'react';
import { logger } from "@utils/logger";
import { LocalRealmContext } from '@mongodb/context/index';

export function LoggerVersion () {
  const { useRealm } = LocalRealmContext
  const realm = useRealm();
  
  useEffect(() => {
    logger.info("Realm is located at:", realm.path);
  }, []);

  return null; // This component does not render anything
};