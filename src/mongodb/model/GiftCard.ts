import Realm from 'realm';
import { MODEL_NAMES } from '@constants';

export class GiftCard extends Realm.Object<GiftCard> {
  id: Realm.BSON.ObjectId;
  asset_id?: number; 
  balance?: number;
  logo?: string;
  
  constructor(
    realm: Realm,
    id: Realm.BSON.ObjectId, 
    asset_id: number,
    balance: number,
    logo: string,
  ) {
    super(realm, {
      id: id,
      asset_id,
      balance,
      logo
    });
  }
  
  static schema: Realm.ObjectSchema = {
    name: MODEL_NAMES.GiftCard,
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      asset_id: 'int?', 
      balance: 'int?', 
      logo: 'string?', 
    },
  };
}


