import React from "react";
import { Styled, Text } from "theme-ui";
import { CallMe } from "./call-me";

export type AboutMeProps = {
  // empty;
};

export const AboutMe: React.FC<AboutMeProps> = () => {
  return (
    <>
      <Text as={Styled.h3} sx={{ fontWeight: "normal" }}>
        Hey there, I&rsquo;m Arpit!
      </Text>
      <p>
        <CallMe />
      </p>
      I am a founder-grown tech leader with rare operating breadth across product, engineering, and design.
    </>
  );
};
