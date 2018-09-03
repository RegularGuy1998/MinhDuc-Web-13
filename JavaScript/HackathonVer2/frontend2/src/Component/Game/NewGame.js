import React, { Component } from 'react';
import { Form, FormGroup, Input, Button } from "reactstrap";

import { createGame } from "networks";

class NewGame extends Component {

    state = {
        player: ["","","",""]
    }

    handleInputChange = (e) => {
        let players = this.state.player;
        players[e.target.name] = e.target.value;
        this.setState({
            player: players
        });
        // console.log(this.state.player);
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state.player);
        createGame(this.state.player)
        .then(res => {
            // console.log(res.data.gameCreated._id);
            this.props.history.push(`/game/${res.data.gameCreated._id}`);
        })
        .catch(err => console.error(err));
    }

    render() {

        return (
            <div>
                <Form onSubmit={this.handleFormSubmit}>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type="text" id="0" name="0" placeholder="Player 1" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type="text" id="1" name="1" placeholder="Player 2" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type="text" id="2" name="2" placeholder="Player 3" required />
                    </FormGroup>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type="text" id="3" name="3" placeholder="Player 4" required />
                    </FormGroup>
                    <FormGroup className='col-4 mr-auto ml-auto'>
                        <Button type='submit' color='danger' className='btn-block'>Create New Game</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default NewGame;