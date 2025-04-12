"use client"
import styled from "styled-components";
import ShortenForm from "@/components/ShortenForm";
import ShortenHeader from "@/components/ShortenHeader";

const WrapperDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <WrapperDiv>
        <ShortenHeader />
        <ShortenForm />
      </WrapperDiv>
    </>
  );
}
