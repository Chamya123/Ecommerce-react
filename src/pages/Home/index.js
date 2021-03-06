import React, { Component } from 'react';
import Introduction from './Components/Introduction';
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

export default class Home extends Component {
    render() {
        return (
            <div>
                <Introduction />
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Header as='h3' style={{ fontSize: '2em' }}>What We Do</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                What makes a dress beautiful ? The woman , of course . And our design process is driven by her . Fabrics that feel good against the skin , hues that she'll have trouble choosing between , fits that bring confidence.
                                </p>
                                <Header as='h3' style={{ fontSize: '2em' }}>Shop Your Dream</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    Yes that's right, you thought it was the stuff of dreams, but even bananas can be bioengineered.
                                </p>
                            </Grid.Column>
                            <Grid.Column floated='right' width={6}>
                                <Image
                                    bordered
                                    size='large'
                                    src='istockphoto-901863672-170667a.jpg'
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
                                <Header as='h3' style={{ fontSize: '2em' }}>"The Secret of great Style is to feel good in what you wear."</Header>
                                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                            </Grid.Column>
                            <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                                <Header as='h3' style={{ fontSize: '2em' }}>"T."</Header>
                                <p style={{ fontSize: '1.33em' }}>
                                    <Image avatar src='https://react.semantic-ui.com/C:\Users\User\Desktop\Shop' />
                                    
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                            nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                            and worth your attention.
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

                        <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Service?</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but its really
                            true.
                            It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
                        </p>
                        <Button as='a' size='large'>I'm Still Quite Interested</Button>
                    </Container>
                </Segment>
            </div>
        )
    }
}