import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Carousel, placeholderCarouselSlides} from './carousel';
import {mockDogSlides} from '../../test-utils/dogs.test-utils';

export default {
  title: 'Components/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  isLoading: false,
  isError: false,
  slides: mockDogSlides,
};

export const Loading = Template.bind({});
Loading.args = {
  isLoading: true,
  isError: false,
  slides: placeholderCarouselSlides,
};

export const Failed = Template.bind({});
Failed.args = {
  isLoading: false,
  isError: true,
  slides: placeholderCarouselSlides,
};
