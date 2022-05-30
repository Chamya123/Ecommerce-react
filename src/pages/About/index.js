import React, { Component } from 'react';

import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Visibility,
} from 'semantic-ui-react'

export default class About extends Component {
    render() {
        return (
            <div>
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>Everyday fashion is our promise to you.</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                At Clothing Shop Online, we’ve made it our mission to provide simple, affordable wardrobe staples to people who love to live. We’ve got the looks you want, from the brands you love, in the colors and sizes you need.

                                </p>
                                <Header as='h5' style={{ fontSize: '2em' }}>What We Do</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                What makes a dress beautiful ? The woman , of course . And our design process is driven by her . Fabrics that feel good against the skin , hues that she'll have trouble choosing between , fits that bring confidence   
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image
                                    bordered
                                    size='large'
                                    src='Fashion.jpg'
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column textAlign='center'>
                                <Button size='huge'>Check Them Out</Button>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '0em' }} vertical>
                    <Grid celled='internally' columns='equal' stackable>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    <Image avatar src='https://react.semantic-ui.com/assets/images/avatar/large/nan.jpg' />
                                    <b>Nan</b> Chief Fun Officer Acme Toys
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>Need a reason to shop ? We'll give you FOR</Header>
                        <p style={{ fontSize: '1.33em' }}>
                         Clothing Shop Online mastered the fashion formula that everyone is looking for : ridiculously comfortable clothing styles at prices that will make you smile .
                        </p>
                        <Button as='a' size='large'>Read More</Button>

                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                        >
                            <a href='#'>Case Studies</a>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>The Best of the Best</Header>
                        <p style={{ fontSize: '1.33em' }}>
                        Within minutes, you can stock up on the leading brands you love to wear every day. Imagine Gildan, Bella + Canvas, and Hanes, right at your fingertips. Our intuitive shopping experience was designed to help you quickly find your favs, while discovering new ones along the way.At Clothing Shop Online, we want you to be comfortable, confident, and carefree – in what you wear and how you shop. Let us dress your every day.
                        </p>
                        <Button as='a' size='large' color='pink'>SHOP NOW</Button>
                    </Container>
                </Segment>


            </div>
        )
    }
}