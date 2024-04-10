import { Box, View } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PagePadding } from './Page';
import { TabIcon } from '@components/atoms/TabIcon';

export function CloseHeader({ navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      style={{ paddingTop: insets.top }}
    >
      <PagePadding paddingOffset={-5}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Box alignSelf="flex-start" mt={3} mb={2}>
            <TabIcon name="close" color="primary" size={7} as="Ionicons" />
          </Box>
        </TouchableOpacity>
      </PagePadding>
    </View>
  );
}
