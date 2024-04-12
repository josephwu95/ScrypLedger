import { createRealmContext } from "@realm/react";
import {
  config,
} from "../config";

export const LocalRealmContext = createRealmContext(config);