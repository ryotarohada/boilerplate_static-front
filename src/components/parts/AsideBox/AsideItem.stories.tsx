import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { AsideItem } from './AsideItem';
import { customTheme } from '@/theme';

export default {
  title: 'AsideItem',
  component: AsideItem,
} as ComponentMeta<typeof AsideItem>;

const Template: ComponentStory<typeof AsideItem> = ({ title, link }) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AsideItem title={title} link={link} />
  </ChakraProvider>
);

export const showAsideItem = Template.bind({});

showAsideItem.args = {
  title: 'click!',
  link: '',
};

showAsideItem.story = {
  parameters: {
    nextRouter: {
      path: '/profile/[id]',
      asPath: '/profile/lifeiscontent',
      query: {
        id: 'lifeiscontent',
      },
      pathname: 'foo',
    },
  },
};
