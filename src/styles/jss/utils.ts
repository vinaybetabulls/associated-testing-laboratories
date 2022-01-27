export const link = (color?: string) => ({
  textDecoration: 'underline',
  display: 'inline-block',
  '&:hover': {
    color,
    cursor: 'pointer',
  },
})
