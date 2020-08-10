import React from "react";
import { Text } from "theme-ui";

export type CallMeProps = {
  // empty;
};

export const CallMe: React.FC<CallMeProps> = (props) => {
  return (
    <em>
      <Text variant="mono">Arpit Sheth &nbsp;•&nbsp; UR-pit sh-EHTH &nbsp;•&nbsp; he/him/his</Text>
    </em>
  );
};
