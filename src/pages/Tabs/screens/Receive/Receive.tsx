import {
  PagePadding,
  ScrollablePage,
  PageHeader,
} from "@components/molecules/Page";
import { Center, Box, VStack, Text, Heading } from "@gluestack-ui/themed";

const t = { 
  receiveHeader: 'Receive'
}

export function Receive ()  {
  return (
    <ScrollablePage fullWidth>
      <PagePadding>
        <PageHeader title={t.receiveHeader} />
        <Center alignItems="center" justifyContent="center">
        </Center>
      </PagePadding>
    </ScrollablePage>
  )
}

