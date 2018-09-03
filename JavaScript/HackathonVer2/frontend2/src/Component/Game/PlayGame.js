import React, { Component } from 'react';

import { Table } from 'reactstrap';

import { getDataGame, putDataGame } from 'networks';

class PlayGame extends Component {
    state = {
        gameInfo: [],
        totalScore: [0, 0, 0, 0],
        sumOfScore: 0
    };

    componentDidMount() {
        const gameID = this.props.match.params.id;
        getDataGame(gameID)
            .then(res => {
                // console.log(res.data.gameData.player[0].score)
                this.setState({
                    gameInfo: res.data.gameData.player,
                    totalScore: res.data.gameData.player.map(playerScore => {
                        return playerScore.score.reduce((total, score) => {
                            // console.log(total + score);
                            return total + score;
                        }, 0);
                    })
                });
                // console.log(this.state.gameInfo[0].score);
            })
            .catch(err => console.error(err));
    }

    handleAddNewRow = () => {
        let game = this.state.gameInfo;
        for (let i = 0; i < 4; i++) {
            game[i].score.push(0);
        };
        putDataGame(game, this.props.match.params.id)
            .then(res => this.setState({gameInfo: res.data.gameUpdated.player}))
            .catch(err => console.error(err));
    }

    render() {


        const renderPlayerName = this.state.gameInfo ?
            this.state.gameInfo.map((pName, index) => (
                <th key={index} >{pName.name}</th>
            )) : "";

        const renderSumOfScore = this.state.gameInfo ?
            this.state.totalScore.reduce((sum, total) => {
                return sum + total;
            }, 0) : '';

        const renderTotalScore = this.state.gameInfo ?
            this.state.totalScore.map((tScore, index) => (
                <th key={index} >{tScore}</th>
            )) : '';

        const renderPlayRow = this.state.gameInfo[0] ?
            this.state.gameInfo[0].score.map((score, index) => (
                <tr key={index}>
                    <th scope='row'>Round {index + 1}</th>
                    <td><input type="number" name={'pl' + index + score} value={score} /></td>
                    <td><input type="number" name={'pl' + index + score} value={this.state.gameInfo[1].score[index]} /></td>
                    <td><input type="number" name={'pl' + index + score} value={this.state.gameInfo[2].score[index]} /></td>
                    <td><input type="number" name={'pl' + index + score} value={this.state.gameInfo[3].score[index]} /></td>
                </tr>
            )) : '';

        return (
            <div>
                <Table hover>
                    <thead>
                        <tr className='thead-dark'>
                            <th></th>
                            {renderPlayerName}
                        </tr>
                        <tr className='thead-light'>
                            <th>Sum of Score ({renderSumOfScore})</th>
                            {renderTotalScore}
                        </tr>
                    </thead>
                    <tbody>
                        {renderPlayRow}
                    </tbody>
                </Table>
                <div className='text-center'>
                    <button type="button" className="btn btn-danger" onClick={this.handleAddNewRow}>Add New Row</button>
                </div>
            </div>
        );
    }
}

export default PlayGame;