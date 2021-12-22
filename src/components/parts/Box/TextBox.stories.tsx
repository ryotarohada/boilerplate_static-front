import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { TextBox } from '@/components/parts/Box/TextBox';
import { customTheme } from '@/theme';

export default {
  title: 'TextBox',
  component: TextBox,
} as ComponentMeta<typeof TextBox>;

const Template: ComponentStory<typeof TextBox> = ({ text }) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <TextBox text={text} />
  </ChakraProvider>
);

export const showTextBox = Template.bind({});
showTextBox.args = {
  text: 'Hello, StoryBook👏',
};
