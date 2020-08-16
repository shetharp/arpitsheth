/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import { useSiteMetadata } from "@shetharp/gatsby-theme-polaroid";

export type FooterBodyProps = {
  // empty
};

export const FooterBody: React.FC<FooterBodyProps> = () => {
  const { siteTitle } = useSiteMetadata();

  return (
    <div>
      <p>
        Thanks for visiting. <Link to="/contact">Say hello!</Link>
      </p>
      <p>
        <small>
          &copy; {new Date().getFullYear()} {siteTitle}
        </small>
      </p>
    </div>
  );
};
export default FooterBody;
