import { Contexts } from "@/types"
import { Box, BoxProps, Heading, Image, Text } from "@chakra-ui/react"
import { FC } from "react"

type Props = {
  data: Contexts.User
} & BoxProps

export const User: FC<Props> = ({ data: { id, name, image }, ...rest}) => {
  return (
    <Box m={50} p={20} display="inline-block" borderWidth={1} borderColor="gray.300" borderRadius={10} {...rest}>
      <Image src={image} alt={name} w={300} h={250} marginBottom={20} borderRadius={10} objectFit="cover"/>
      <Text fontSize={16}>{id}</Text>
      <Heading fontSize={16}>{name}</Heading>
    </Box>
  )
}
