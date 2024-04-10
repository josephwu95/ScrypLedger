import { PagePadding, ScrollablePage,PageHeader } from "@components/molecules/Page";
import { Center, Box, VStack, Text, Heading, Button, ButtonText,ButtonIcon } from "@gluestack-ui/themed";

const t = { 
  payTransfer: 'Pay/Transfer',
}

export function PayTransfer ()  {
  const handleButton = () => {
    console.log('HELLOOO')
  }
  
  return (
    <ScrollablePage fullWidth>
      <PagePadding>
        <PageHeader title={t.payTransfer} />
        <Button
          size="lg"
          variant="outline"
          action="positive"
          isDisabled={false}
          isFocusVisible={false}
          onPress={handleButton}
        >
          <ButtonText>Add </ButtonText>
          {/* <ButtonIcon as={AddIcon}/> */}
        </Button>
      </PagePadding>
    </ScrollablePage>
  )
}

