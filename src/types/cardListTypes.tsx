import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { RootStackType } from '../../navigation/root-stack-type';

export interface Transaction {
  /**
   * To keep the transation note
   */
  note: string;

  /**
   * Transaction amount
   */
  amount: string;

  /**
   * Transaction currency
   */
  currency: string;

  /**
   * Transaction Date
   */
  date: string;
}

export interface Card {
  /**
   * Unique number to identify a card
   */
  id: number;

  /**
   * Name of the bank of card
   */
  name: string;

  /**
   * Image for the card
   */
  logo: string;

  /**
   * Transaction list for of the cards
   */
  transactions: Transaction[];
}

export interface CardViewPropType {
  card: Card;
}

export interface CardRenderItemParams {
  item: Card;
  index: number;
}

/**
 * Props Type for CardListScreen
 */
// export type CardsListScreenProps = NativeStackScreenProps<
//   RootStackType,
//   'CardsListScreen'
// >;
