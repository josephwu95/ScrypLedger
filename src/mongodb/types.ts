import Realm from 'realm';
import { Result } from 'neverthrow';

export type ToRealmObject<T> = T &
  Realm.Object & {
    id: Realm.BSON.ObjectId;
  };

export type ToRealmObjectWithKey<T, K extends keyof T> = T &
  Realm.Object & {
    [P in K]: Realm.BSON.ObjectId;
  };

export type DatabaseResult<T = null> = Result<T, string>;

export type WithMandatory<T, K extends keyof T> = Partial<T> & Pick<T, K>;
