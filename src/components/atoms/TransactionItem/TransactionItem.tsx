import { StyleSheet, Text, View } from 'react-native';
import { colors } from '@src/resource';

export function TransactionItem(props) {
  const { data } = props;
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ color: colors.white }}>{data.item.note}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: colors.white }}>{data.item.currency}</Text>
          <Text style={{ color: colors.white }}>{data.item.amount}</Text>
        </View>
      </View>

      <Text style={{ color: colors.white }}>{data.item.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 1,
    marginVertical: 1,
    backgroundColor: colors.gray,
  },
});