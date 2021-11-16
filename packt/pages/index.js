import { Heading, Page, TextField, FormLayout, Button } from "@shopify/polaris";

const call_packt = require("call_packt.js")

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
        type="number"
        label="Number of Bags"
        onChange={() => {}}
      />
      <Button onclick="call_packt">Submit</Button> 
    </FormLayout>
  </Page>
);


export default Index;
