// import Realm from 'realm';
// import { Gender, MealTypes } from './enums'

// export interface IUser extends Realm.Object {
//   id: Realm.BSON.ObjectId;
//   username?: string;
//   email?: string;
//   passwordHashed?: string;
//   name?: string;
//   doctorID?: string;
//   height?: number; /** Height in inches */
//   weight?: number; /** Weight in lbs */
//   age?: number;
//   gender?: Gender; /** Gender */
//   image?: string; /** Profile image URL */
// }

// export interface IDoctor extends Realm.Object {
//   id: Realm.BSON.ObjectId;
//   name?: string;
//   email?: string;
//   image?: string; /** Doctor headshot URL */
// }

// export interface IInsulingDosageFormula extends Realm.Object {
//   id: Realm.BSON.ObjectId;
//   range_start?: number;
//   range_end?: number; 
//   insulin_units?: number;
// }

// export interface IBloodSugarReading extends Realm.Object {
//   id: Realm.BSON.ObjectId;
//   mealType?: MealTypes;
//   timestamp?: number; 
//   insulin_units?: number;
//   sugarlevel?: number;
// }

// export interface IDay extends Realm.Object {
//   id: Realm.BSON.ObjectId;
//   timestamp?: number; 
//   bloodSugarReading?: IBloodSugarReading[];
// }

// export interface IFlag {
//   name: string;
//   value: string;
//   description?: string;
// }

