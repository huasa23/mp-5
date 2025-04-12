"use client"
import { useState } from "react";
import { shortenUrl } from "@/lib/shortenService";
import { getDomainUrl } from "@/lib/getDomainUrl";
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

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 60%;
    margin: 0 auto;
    border: 1px solid #000;
    padding: 20px;
    border-radius: 10px;
    height: 30vh;
`;

const FormTitle = styled.h1`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(8px + 1vw);
    font-weight: 600;
    margin: 0;
    
`;

const FormDestination = styled.p`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(5px + 1vw);
    font-weight: 300;
    margin-bottom: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`;

const Lable = styled.label`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(5px + 1vw);
    font-weight: 300;
    margin-bottom: 5px;
`;

const Input = styled.input`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(5px + 1vw);
    font-weight: 300;
    margin-bottom: 10px;
`;

const Button = styled.button`
    font-family: ${play.style.fontFamily}, serif;
    font-size: calc(5px + 1vw);
    font-weight: 300;
    margin-bottom: 10px;
`;

const FinalUrlWrapper = styled.div`
font-family: ${play.style.fontFamily}, serif;
    font-size: calc(5px + 1vw);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
`;

export default function ShortenForm() {
    const [formData, setFormData] = useState({
        destinationUrl: '',
        alias: ''
    });

    const [finalUrl, setFinalUrl] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        const result = await shortenUrl(formData.destinationUrl, formData.alias);
        const domain = await getDomainUrl();
        if(result) {
            setFinalUrl(`Your URL is: ${domain}/${formData.alias}`);
        } else {
            setFinalUrl('Your URL or alias is already taken!');
        }
    }

    return (
        <FormWrapper>
            <FormTitle>Shorten a URL</FormTitle>
            <FormDestination>Enter a long URL to create a shorter, shareable link</FormDestination>
            <Form onSubmit={handleSubmit}>
                <Lable>URL</Lable>
                <Input type="text" id="destinationUrl" name="destinationUrl" value={formData.destinationUrl} onChange={handleChange} placeholder="Enter URL" />
                <Lable>Alias</Lable>
                <Input type="text" id="alias" name="alias" value={formData.alias} onChange={handleChange} placeholder="Enter Alias" />
                <Button type="submit">Shorten</Button>
            </Form>
            <FinalUrlWrapper>
                {finalUrl}
            </FinalUrlWrapper>
        </FormWrapper>
    )
}