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
      I am a startup-savvy engineer building technology for a more creative future.
    </>
  );
};
