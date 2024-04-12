import Realm from 'realm';

export interface Transaction extends Realm.Object {
  id: Realm.BSON.ObjectId;
  timestamp: number;
  from: string; 
  to: string;
  amount: number;
}

export interface IDay extends Realm.Object {
  id: Realm.BSON.ObjectId;
  timestamp?: number; 
  transactions?: Transaction[];
}


