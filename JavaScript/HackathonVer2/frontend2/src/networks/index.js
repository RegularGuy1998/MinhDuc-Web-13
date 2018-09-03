import axios from 'axios';
import { ROOT_API } from "../static/index";;

export const createGame = (player) => {
    const newGame = {
        player: [
            {
                name: player[0],
                score: [0]
            }, {
                name: player[1],
                score: [0]
            }, {
                name: player[2],
                score: [0]
            }, {
                name: player[3],
                score: [0]
            }
        ]
    };

    return axios.post(ROOT_API, {newGame});
}

export const getDataGame = (id) => {
    return axios.get(`${ROOT_API}/${id}`);
}

export const putDataGame = (gameData, id) => {
    return axios.put(`${ROOT_API}/${id}`, gameData);
}