import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { GestureResponderEvent } from "react-native";

interface Props {
  onChangeText: (text: string) => void;
  label: string;
  msg: string;
  variant: "flat" | "outlined";
  textColor: string;
  outlineColor: string;
  activeOutlineColor: string;
  underlineColor: string;
  activeUnderlineColor: string;
  selectionColor: string;
  outlineStyle: {};
  contentStyle: {};
  style: {};
}

export default function CTextInput({
  onChangeText,
  label,
  msg,
  variant,
  textColor,
  outlineColor,
  activeOutlineColor,
  underlineColor,
  activeUnderlineColor,
  selectionColor,
  outlineStyle,
  contentStyle,
  style,
}: Props) {
  return (
    <TextInput
      onChangeText={onChangeText}
      label={label}
      value={msg}
      mode={variant}
      textColor={textColor}
      outlineColor={outlineColor}
      underlineColor={underlineColor}
      activeUnderlineColor={activeUnderlineColor}
      selectionColor={selectionColor}
      outlineStyle={outlineStyle}
      contentStyle={contentStyle}
      style={style}
    />
  );
}
