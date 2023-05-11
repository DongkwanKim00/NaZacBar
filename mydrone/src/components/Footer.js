import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; 2023 My Drone Website. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;