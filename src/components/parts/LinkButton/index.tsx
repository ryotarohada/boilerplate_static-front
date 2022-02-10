import { Button, ButtonProps } from '@mui/material'
import Link, { LinkProps } from 'next/link'

type Props = Pick<LinkProps, 'href' | 'replace'> & ButtonProps

export const LinkButton: React.FC<Props> = ({
  children,
  href,
  replace,
  variant = 'contained',
  ...rest
}) => {
  return (
    <Link href={href} replace={replace} passHref>
      <Button variant={variant} {...rest}>
        {children}
      </Button>
    </Link>
  )
}
