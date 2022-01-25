import { chakra } from '@chakra-ui/react'

/** ページテンプレート */
export const Template: React.FC = ({ children }): JSX.Element => (
  <chakra.div data-app-root>{children}</chakra.div>
)
