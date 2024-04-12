import { Realm, BSON } from "@realm/react";
import { MODEL_NAMES } from "@constants";

export class Transaction extends Realm.Object {
  static schema = {
    name: MODEL_NAMES.Transaction,
    primaryKey: "id",
    properties: {
      id: "objectId",
      timestamp: "int?",
      from: "string",
      to: "string",
      amount: "int?",
    },
  };
}

export default Transaction;
