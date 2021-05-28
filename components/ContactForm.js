import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    Textarea,
    FormErrorMessage,
    FormHelperText,
  } from "@chakra-ui/react"

const  ContactFrom = () => {
    const [state, handleSubmit] = useForm("mvodgngr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
       <FormLabel colorScheme="teal"  m={2} size={['sm','sm','md','md']} htmlFor="email">
           Name
       </FormLabel>
        <Input
        m={2}
        colorScheme="teal"
        id="name"
        type="name" 
        name="name"
        />
      <FormLabel colorScheme="teal" m={2} htmlFor="email">
        Email Address
      </FormLabel>
      <Input 
        m={2}
        colorScheme="teal"
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <Textarea
        m={2}
        colorScheme="teal"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <Flex
      justify="center"
      >
          <Button colorScheme="teal"   m={2} type="submit" disabled={state.submitting}>
           Submit
         </Button>
      </Flex>
    </form>
    </>
  )
}

export default ContactFrom;