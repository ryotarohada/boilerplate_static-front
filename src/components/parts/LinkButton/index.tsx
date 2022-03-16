import { Button, ButtonProps } from '@mui/material'
import Link, { LinkProps } from 'next/link'

type Props = {} & LinkProps & ButtonProps

export const LinkButton: React.FC<Props> = ({
  children,
  href,
  variant = 'contained',
  ...rest
}) => {
  return (
    <Link href={href} passHref>
      <Button variant={variant} {...rest}>
        {children}
      </Button>
    </Link>
  )
}
