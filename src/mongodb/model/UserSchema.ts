import Realm from 'realm';
import { MODEL_NAMES } from '@constants';

export class UserSchema extends Realm.Object<UserSchema> {
  id: Realm.BSON.ObjectId;
  username?: string;

  constructor(
    realm: Realm,
    id: Realm.BSON.ObjectId, 
    username: string,
  ) {
    super(realm, {
      id,
      username,
    });
  }
  
  static schema: Realm.ObjectSchema = {
    name: MODEL_NAMES.User,
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      username: 'string',      
    },
  };
}
