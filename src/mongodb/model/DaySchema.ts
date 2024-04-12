import Realm from 'realm';
import { MODEL_NAMES } from '@constants';
import { Transaction } from '../../types/types';

export class DaySchema extends Realm.Object<DaySchema> {
  id: Realm.BSON.ObjectId;
  timestamp?: number; 
  transactions?: Transaction[];
  
  constructor(
    realm: Realm,
    id: Realm.BSON.ObjectId, 
    timestamp: number,
    transactions: Transaction[],
  ) {
    super(realm, {
      id: id,
      timestamp,
      transactions,
    });
  }
  
  static schema: Realm.ObjectSchema = {
    name: MODEL_NAMES.Day,
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      timestamp: 'int?', 
      transactions: { type: 'list', objectType: MODEL_NAMES.Transaction }
    },
  };
}


