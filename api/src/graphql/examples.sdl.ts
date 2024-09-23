export const schema = gql`
  type Example {
    a: Int!
  }

  type Query {
    example: Example! @skipAuth
  }
`
