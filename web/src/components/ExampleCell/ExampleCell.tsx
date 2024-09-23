import type { FindExampleQuery, FindExampleQueryVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindExampleQuery,
  FindExampleQueryVariables
> = gql`
  query FindExampleQuery {
    example {
      a
    }
  }
`

export const Loading = () => <div>ExampleCell (gql loading)</div>

export const Empty = () => <div>ExampleCell (gql empty)</div>

export const Failure = ({
  error,
}: CellFailureProps<FindExampleQueryVariables>) => (
  <div style={{ color: 'red' }}>ExampleCell (gql error): {error?.message}</div>
)

export const Success = ({
  example,
}: CellSuccessProps<FindExampleQuery, FindExampleQueryVariables>) => {
  return <div>ExampleCell (gql success) {JSON.stringify(example)}</div>
}
