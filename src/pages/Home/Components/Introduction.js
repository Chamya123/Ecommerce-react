import React, {Component} from 'react';
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
} from 'semantic-ui-react';

class Introduction extends Component {
    render () {
        return (

            
            <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 700, padding: '1em 0em' }}
                vertical
            >
                <Container text>
                    <Header
                        as='h1'
                        content='Tara Boutique'
                        inverted
                        style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '3em' }}
                    />
                    <Header
                        as='h4'
                        content='Your new Wardobe awaits.'
                        inverted
                        style={{ fontSize: '3em', fontWeight: 'normal' }}
                    />
                    
                    
                    <Button primary size='huge'>
                        SHOP NOW
                        <Icon name='right arrow' />
                    </Button>
                </Container>
            </Segment>
        );
    }
}

export default Introduction;