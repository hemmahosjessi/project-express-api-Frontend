import React from 'react'
import styled from 'styled-components'
import unsplash from '../assets/unsplash.jpg'
import { keyframes } from "styled-components";


const BackgroundImage = styled.div`
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

const HeadingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    justify-content: center;
`

const Title = styled.div`
    display: flex;
    align-items: center;
`

const Text = styled.div`
    display: flex;
    flex-direction: column;
`

const H1 = styled.h1`
    color: #fff;
    font-size: 110px;
    margin-bottom: 0;
    max-width: 740px;
    text-align: center;
    font-family: bebas neue;
`

const H2 = styled.h2`
    color: #fff;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 3px;
    margin: 0; 
    font-family: museomoderno;
    font-weight: 700; 
`

const Number = styled.p`
    color: #fff;
    font-size: 64px;
    font-weight: bold;
    line-height: 72px;
    margin: 0;
    padding-right: 1rem;
    font-family: museomoderno;
    font-weight: 700; 
`

const SpanOne = styled.span`
    text-decoration: line-through;
`

const SpanTwo = styled.span`
    font-size: 300px;
    line-height: 300px;
    text-align: center;
    letter-spacing: 44px;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF0075, 0 0 20px #FF0075, 0 0 25px #FF0075, 0 0 35px #FF0075;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;
`

const Button = styled.button`
    background-color: #221659;
    height: 64px;
    width: 180px;
    border-radius: 32px;
    color: #fff;
    border: none;
    font-size: 24px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    font-family: museomoderno;
    font-weight: 300; 
    transition: .2s transform ease-in-out;
    will-change: transform;
    z-index: 0;

    &::after {
    background-color: #FF0075;
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    transform: translate(-100%, 0) rotate(10deg);
    transform-origin: top left;
    transition: .2s transform ease-out;
    will-change: transform;
    z-index: -1;
    }
    

    &:hover::after {
        transform: translate(0, 0);
    }
    
  &:hover {
    border: 2px solid transparent;
    color: #fff;
    transform: scale(1.05);
    will-change: transform;
  }  
`

const TickerWrap = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    // overflow: hidden;
    height: 4rem;
    padding-left: 100%;
`

const TickerAnimation = keyframes`
    0% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); visibility: visible; }  
    100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); }
    @-webkit-keyframes {
    }
`

const Ticker = styled.div`
    display: inline-block;
    height: 4rem;
    line-height: 4rem;  
    white-space: nowrap;
    padding-right: 100%;
    box-sizing: content-box;
    -webkit-animation-iteration-count: infinite; 
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ${TickerAnimation};
    animation-name: ${TickerAnimation};
    -webkit-animation-duration: 80s;
    animation-duration: 80s;
    animation-name: ${TickerAnimation};
    animation-duration: 30s;
    animation-iteration-count: infinite;

    0% {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
        visibility: visible;
      }
      100% {
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
      }
    `

    const TickerItem = styled.p`
    display: inline-block;
    padding: 0 2rem;
    font-size: 2rem;
    color: white; 
    `


export const StartScreen = () => {

    return (

            <BackgroundImage style={{ backgroundImage: `url(${unsplash})`, opacity: 0.95}}>


            <TickerWrap>  
                <Ticker>
                    <TickerItem>Hey Mr DJ wont you play another lovesong, no more talking if you please...</TickerItem>
                    <TickerItem>Did you give the world some love today babe?...</TickerItem>
                    <TickerItem>I love rock n' roll! So put another dime in the jukebox, baby....</TickerItem>
                    <TickerItem>Sing with me, sing for the year. Sing for the laughter, sing for the tear. Sing with me if it's just for today. Maybe tomorrow the good Lord will take you away...</TickerItem>
                </Ticker>
            </TickerWrap>

            <HeadingContainer>
                <H1>All you need is <SpanOne>Love</SpanOne> <SpanTwo>MUSIC</SpanTwo></H1>
                    <Title>
                        <Number>50</Number>
                        <Text>
                            <H2>popular Spotify tracks!</H2>
                        </Text>
                    </Title>
                    <ButtonContainer>
                        <Button>Tracks A-Z</Button>
                        <Button>Artists A-Z</Button>
                        <Button>Genres</Button>
                        <Button>All</Button>
                    </ButtonContainer>
            </HeadingContainer>
            </BackgroundImage>

            )
        }
