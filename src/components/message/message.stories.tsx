import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Message from '.';


const meta: Meta<typeof Message> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Message',
  component: Message,
};

export default meta;

type Story = StoryObj<typeof Message>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const anyMessage: Story = {
  render: () => <Message message='Perer' />,
};