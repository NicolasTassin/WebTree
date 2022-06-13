import React from "react";
import Image from "next/image";
import styled from "styled-components"


const StyledDiv = styled.div`
    display:flex;

`
const Header = () => {
  return (
    <StyledDiv>
      <Image src="/fav2.ico" alt="Vercel Logo" width={80} height={50}  />
      <h1>Webtree</h1>
    </StyledDiv>
  );
};

export default Header;
