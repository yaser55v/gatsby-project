import React, { useContext } from "react"
import { Router, Link } from "@reach/router"
import { Button, Container, Flex, Heading, NavLink } from "theme-ui"
import { IdentityContext } from "../../identity-context"

let Dash = () => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Container>
      <Flex as="nav">
        <NavLink as={Link} to="/" p={2}>
          Home
        </NavLink>
        <NavLink as={Link} to={"/app"} p={2}>
          Dashboard
        </NavLink>
        {user && (
          <NavLink
            href="#!"
            p={2}
            onClick={() => {
              netlifyIdentity.logout()
            }}
          >
            Log out {user.user_metadata.full_name}
          </NavLink>
        )}
      </Flex>
      <span>Dash hasUser: {user && user.user_metadata.full_name}</span>
    </Container>
  )
}
let DashLoggedOut = props => {
  const { user, identity: netlifyIdentity } = useContext(IdentityContext)

  return (
    <Flex sx={{ flexDirection: "column", padding: 3 }}>
      <Heading as="h1">Get Stuff Done</Heading>
      <Button
        sx={{ marginTop: 2 }}
        onClick={() => {
          netlifyIdentity.open()
        }}
      >
        Log In
      </Button>
    </Flex>
  )
}
const app = () => {
  return (
    <Router>
      <Dash path="/app" />
    </Router>
  )
}

export default app
