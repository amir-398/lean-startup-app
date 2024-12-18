import React from "react";
import { View } from "react-native";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import Btn from "./Button";
import { userEvent, within } from "@storybook/testing-library";
export default {
  title: "Components/Btn",
  component: Btn,
  argTypes: {
    title: { control: "text" },
    onPress: { action: "clicked" },
    textStyle: { control: "object" },
    btnStyle: { control: "object" },
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    textWeight: {
      control: { type: "select" },
      options: ["light", "medium", "bold"],
    },
    textSize: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
  },
} as ComponentMeta<typeof Btn>;

const Template: ComponentStory<typeof Btn> = (args) => (
  <View style={{ flex: 1 }}>
    <Btn {...args} />
  </View>
);

export const Default = Template.bind({});
Default.args = {
  title: "Click Me",
  onPress: () => alert("Button Clicked"),
  loading: false,
  disabled: false,
  size: "md",
  textWeight: "medium",
  textSize: "md",
  textStyle: { color: "white" },
};

export const Loading = Template.bind({});
Loading.args = {
  title: "Loading...",
  loading: true,
  disabled: false,
  size: "md",
  textWeight: "medium",
  textSize: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Disabled",
  loading: false,
  disabled: true,
  size: "md",
  textWeight: "medium",
  textSize: "md",
};

export const SmallButton = Template.bind({});
SmallButton.args = {
  title: "Small Button",
  loading: false,
  disabled: false,
  size: "sm",
  textWeight: "medium",
  textSize: "sm",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  title: "Large Button",
  loading: false,
  disabled: false,
  size: "lg",
  textWeight: "bold",
  textSize: "lg",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const button = await canvas.findByText("Click Me");
  await userEvent.click(button);
};
