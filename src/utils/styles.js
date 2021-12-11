import styled from "styled-components";
import { keyframes } from "styled-components"



// StartScreen //

export const BackgroundImage = styled.div`
    position: relative;
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`

export const HeadingContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10rem;
`

export const Title = styled.div`
    display: flex;
    align-items: center;
`

export const Text = styled.div`
    display: flex;
    flex-direction: column;
`

export const H1 = styled.h1`
    color: #fff;
    font-size: 110px;
    margin-bottom: 0;
    max-width: 740px;
    text-align: center;
    font-family: bebas neue;
`

export const H2 = styled.h2`
    color: #fff;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: 3px;
    margin: 0; 
    font-family: museomoderno;
    font-weight: 700; 
`

export const Number = styled.p`
    color: #fff;
    font-size: 64px;
    font-weight: bold;
    line-height: 72px;
    margin: 0;
    padding-right: 1rem;
    font-family: museomoderno;
    font-weight: 700; 
`

export const SpanOne = styled.span`
    text-decoration: line-through;
`

export const SpanTwo = styled.span`
    font-size: 300px;
    line-height: 300px;
    text-align: center;
    letter-spacing: 44px;
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #FF0075, 0 0 20px #FF0075, 0 0 25px #FF0075, 0 0 35px #FF0075;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 3rem;
`

export const Button = styled.button`
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

export const TickerWrap = styled.div`
    position: fixed;
    top: 2rem;
    width: 100%;
    // overflow: hidden;
    height: 4rem;
    padding-left: 100%;
`

export const TickerAnimation = keyframes`
    0% { -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); visibility: visible; }  
    100% { -webkit-transform: translate3d(-100%, 0, 0); transform: translate3d(-100%, 0, 0); }
    @-webkit-keyframes {
    }
`

export const Ticker = styled.div`
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

    export const TickerItem = styled.p`
    display: inline-block;
    padding: 0 2rem;
    font-size: 2rem;
    color: white; 
    font-family: museomoderno;
    `

// TracksList //

export const TrackTitle = styled.h4`
color: #fff;
font-size: 24px;
margin: 0;
font-family: museomoderno;
`

export const ArtistTitle = styled.h4`
color: #fff;
font-size: 16px;
margin: 0;
font-family: museomoderno;
padding-top: 0.5rem;
`

export const Genre = styled.h4`
color: #fff;
font-size: 12px;
margin: 0;
font-family: museomoderno;
`

export const LoaderContainer = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #60cd18;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const LoadingText = styled.h3`
    position: relative;
    color: #1a1a1a;
    font-size: 48px;
    text-align: center;
    margin-top: 0;

    @media (max-width: 767px) {
        font-size: 32px;
    }
`

export const TrackList = styled.div` 
    boz-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

export const TrackItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #1a1a1a;
    width: 300px;
    position: relative;
    margin: 16px;
    padding: 32px;
    min-height: 272px;  
`

export const BottomContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const Score = styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;
`

export const P = styled.p`
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 0;
    backgrund-color: #1a1a1a;
    color: #fff;
`

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const P2 = styled.h4`
color: #fff;
font-size: 12px;
margin: 0;
font-family: museomoderno;
`


// Genre //

export const SelectContainer = styled.div`
    width: 400px;
    margin: 0 auto;
    padding-top: 5rem;
`

export const ListByGenre = styled.div` 
    boz-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`

export const GenreItem = styled.div`
    background-color: #1a1a1a;
    width: 300px;
    position: relative;
    margin: 16px;
    padding: 32px;
    min-height: 272px;
`