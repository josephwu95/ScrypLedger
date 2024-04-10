import { Box, Heading, HStack, ScrollView, View } from '@gluestack-ui/themed';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function PagePadding({ children, paddingOffset = 0 }) {
  return (
    <View style={{ paddingHorizontal: 24 + paddingOffset, width: '100%' }}>
      {children}
    </View>
  );
}

export function PageHeader({
  title,
  rightHeaderComponent,
  includePagePadding = false,
}) {
  const header = useMemo(
    () => (
      <HStack style={styles.pageTitle}>
        <Heading size="2xl" textTransform="capitalize">
          {title}
        </Heading>
        {rightHeaderComponent && rightHeaderComponent}
      </HStack>
    ),
    [title, rightHeaderComponent],
  );

  if (includePagePadding) {
    return <PagePadding>{header}</PagePadding>;
  }

  return header;
}
export function Page({
  children,
  headerShown = true,
  fullWidth = false,
  containerStyle = {},
  ...props
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: headerShown ? 0 : insets.top },
        containerStyle,
      ]}
    >
      <Box h="100%" px={fullWidth ? 0 : 5} {...props}>
        {children}
      </Box>
    </View>
  );
}

export function ScrollablePage({
  children,
  headerShown = true,
  fullWidth = false,
  showsVerticalScrollIndicator = true,
  title = null,
  ...props
}) {
  const insets = useSafeAreaInsets();
  return (
    <View
      backgroundColor='$background'
      style={[
        styles.container,
        {
          paddingTop: headerShown ? 0 : insets.top,
        },
      ]}
    >
      {title ? title : null}
      <ScrollView
        showsVerticalScrollIndicator={showsVerticalScrollIndicator}
        style={[
          styles.container,
          {
            paddingBottom: insets.bottom,
          },
        ]}
      >
        <Box h="100%" px={fullWidth ? 0 : 5} {...props}>
          {children}
        </Box>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageTitle: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 8,
  },
  container: {
    flex: 1,
    height: '100%',
    backgroundColor:'#FFF',
    padding:10
  },
});

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  headerShown: PropTypes.bool,
  scrollable: PropTypes.bool,
  rightHeaderComponent: PropTypes.node,
};
