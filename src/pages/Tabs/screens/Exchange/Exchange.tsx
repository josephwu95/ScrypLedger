import {
  PagePadding,
  ScrollablePage,
  PageHeader,
} from "@components/molecules/Page";
import { Center, Box, VStack, Text, Heading } from "@gluestack-ui/themed";

const t = {
  exchangeHeader: 'Exchange'
}

export function Exchange ()  {
  return (
    <ScrollablePage fullWidth>
      <PagePadding>
        <PageHeader title={t.exchangeHeader} />
        <Center alignItems="center" justifyContent="center">
        </Center>
      </PagePadding>
    </ScrollablePage>
  )
}
