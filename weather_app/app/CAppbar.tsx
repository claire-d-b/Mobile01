import * as Location from "expo-location";
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Appbar, Text, IconButton } from "react-native-paper";
import { evaluate } from "mathjs";
import CTextInput from "./CTextInput";
import CBottomNav from "./CBottomNav";

const messages = [
  "7",
  "8",
  "9",
  "C",
  "AC",
  "4",
  "5",
  "6",
  "+",
  "-",
  "1",
  "2",
  "3",
  "x",
  "/",
  "0",
  ".",
  "00",
  "=",
  "",
];

export default function CAppbar() {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setLocation(address);
    console.log(location);
  }, [clicked]);

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Appbar.Header
        style={{
          backgroundColor: "#534DB3",
          padding: 0,
          margin: 5,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <CTextInput
          onChangeText={(text: string) => setAddress(text)}
          textColor="white"
          label="Location"
          msg={address}
          variant="flat"
          outlineColor="white"
          activeOutlineColor="white"
          underlineColor="white"
          activeUnderlineColor="white"
          selectionColor="white"
          outlineStyle={{
            borderRadius: 15,
            borderColor: "white",
          }}
          contentStyle={{}}
          style={{ backgroundColor: "transparent", width: "75%" }}
        />
        <IconButton
          icon="navigation"
          iconColor="white"
          size={20}
          onPress={() => {
            setClicked((c) => !c);
            console.log(clicked);
          }}
          style={{ transform: "rotate(45deg);" }}
        />
      </Appbar.Header>
      <View
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CBottomNav
            location={location}
            style={{
              paddingBottom: 40,
            }}
          />
        </View>
      </View>
    </View>
  );
}
