import React from 'react'
import unsplash from '../assets/unsplash.jpg'
import { Link } from 'react-router-dom'
import { 
    BackgroundImage,
    HeadingContainer,
    Title,
    Text,
    H1,
    H2,
    Number,
    SpanOne,
    SpanTwo,
    ButtonContainer,
    Button,
    Ticker,
    TickerWrap,
    TickerItem
} from 'utils/styles'


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
                        <Link  to='/alltracks'>
                            <Button>Show Tracks</Button>
                        </Link>
                        {/* <Link to='/genres'>
                            <Button>Choose by genre</Button> 
                        </Link> */}

                    </ButtonContainer>
            </HeadingContainer>
            </BackgroundImage>

            )
        }
