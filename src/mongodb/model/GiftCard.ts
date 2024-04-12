import { Realm, BSON } from "@realm/react";
import { MODEL_NAMES } from "@constants";

export class GiftCard extends Realm.Object {
  static schema = {
    name: MODEL_NAMES.GiftCard,
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      giftcard_name: 'string?',
      balance: 'int?', 
      logo: 'string?',
      transactions: { type: 'list', objectType: MODEL_NAMES.Transaction }
    },
  };
}

export default GiftCard;
