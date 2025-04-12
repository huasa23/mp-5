"use client"

import styled from "styled-components";
import { Play } from "next/font/google";
import { Sixtyfour_Convergence } from "next/font/google";

const sixtyfourConvergence = Sixtyfour_Convergence({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    display: 'swap',
});

const play = Play({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const HeaderWrapperName = styled.h1`
    text-align: left;
    font-family: ${sixtyfourConvergence.style.fontFamily}, serif;
    font-optical-sizing: auto;
    font-size: calc(8px + 3vw);
    font-weight: 600;
    font-style: normal;
`;

const HeaderWrapperDesc = styled.p`
    text-align: left;
    padding-left: 1vw;
    font-family: ${play.style.fontFamily}, serif;
    font-weight: 400;
    font-style: normal;
    font-size: calc(5px + 1vw);
`;
export default function ShortenHeader() {
    return (
        <>
            <HeaderWrapperName>
                Shortener Service
            </HeaderWrapperName>
            <HeaderWrapperDesc>
                Shorten your URLs
            </HeaderWrapperDesc>
        </>
        
    )
}