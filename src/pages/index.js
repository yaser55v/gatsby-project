import React, { useEffect } from "react"
import { Button, Container, Flex, Heading } from "theme-ui"
import netlifyIdentity from "netlify-identity-widget"


const props = () => {
  useEffect(() => {
    netlifyIdentity.init({})
  })
  return (
    <Container p={4} bg="muted">
      <Flex sx={{ flexDirection: "column", padding: 3 }}>
        <Heading as="h1">Gatsby Project</Heading>
        <Button
          sx={{ marginTop: 2 }}
          onClick={() => {
            netlifyIdentity.open()
          }}
        >
          Log In
        </Button>
      </Flex>
    </Container>
  )
}

export default props
