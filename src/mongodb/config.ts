import Realm from "realm";
import {
  UserSchema,
  DaySchema,
  GiftCard,
  Transaction,
} from "./model";
// import { logger } from "@utils/logger";
import {  createRealmContext  } from '@realm/react'

export const config: Realm.Configuration = {
  schema: [
    UserSchema,
    DaySchema,
    GiftCard,
    Transaction,
  ],
  schemaVersion: 0,
  deleteRealmIfMigrationNeeded: true, // Use only during development
};
// class RealmSingleTon {
//   realm1: Realm = null;

//   connect() {
//     if (this.realm1 === null || this.realm1.isClosed) {
//       this.realm1 = new Realm(config);

//       if (__DEV__) {
//         logger.info("Realm is located at:", this.realm1.path);
//       }
//     }
//   }

//   get realm() {
//     this.connect();
//     return this.realm1;
//   }

//   diconnect() {
//     this.realm1.close();
//   }
// }

// export const realmInstance = new RealmSingleTon();
