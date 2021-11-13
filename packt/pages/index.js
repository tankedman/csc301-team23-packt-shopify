import { Heading, Page, TextField, FormLayout, Button } from "@shopify/polaris";

const Index = () => (
  <Page
    title = 'Packt'
    primaryAction={{
      content: 'select products',
      onAction: () => console.log('clicked')
    }}>

    <FormLayout>
      <TextField label="Phone Number" onChange={() => {}} autoComplete="off" />
      <TextField
        type="email"
        label="Number of Bags"
        onChange={() => {}}
      />
      <Button submit>Submit</Button>
    </FormLayout>
  </Page>
);


export default Index;
