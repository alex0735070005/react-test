/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Container = ({ children }: Props) => (
  <div
    css={css`
      margin: auto;
      max-width: 800px;
      padding: 15px;
    `}
  >
    {children}
  </div>
);
