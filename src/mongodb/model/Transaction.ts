import { Realm } from "@realm/react";
import { MODEL_NAMES } from "@constants";

export class Transaction extends Realm.Object<Transaction> {
  id!: Realm.BSON.ObjectId;  
  timestamp!: number | null;
  from: string | null;
  to: string | null;
  amount!: number | null;

  constructor(
    realm: Realm,
    id: Realm.BSON.ObjectId,
    timestamp: number,
    from: string,
    to: string,
    amount: number
  ) {
    super(realm, {
      id: id,
      timestamp,
      from,
      to,
      amount
    });
  }

  static schema: Realm.ObjectSchema = {
    name: MODEL_NAMES.Transaction,
    primaryKey: "id",
    properties: {
      id: "objectId",
      timestamp: "int?",
      from: "string",
      to: "string",
      amount:"int"
    },
  };
}
