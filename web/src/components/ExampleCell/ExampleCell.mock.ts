// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  example: {
    __typename: 'Example' as const,
    id: 42,
  },
})
