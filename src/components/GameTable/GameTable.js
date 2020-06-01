import React from 'react';
import './GameTable.css';
import closeIcon from './../../assets/icons/icon-close.png';
import circleIcon from './../../assets/icons/icon-circle.png';
import Button from "@material-ui/core/Button";
import Dialog from '@material-ui/core/Dialog';
import { DialogTitle } from '@material-ui/core';




const gameTable = (props) => {

    const tableArray = [];

    props.table.map((item, index) => {
        if (props.table[index] === '1') {
            tableArray.push(<img src={closeIcon} style={{ height: '55%' }} />);
        }
        else if (props.table[index] === '2') {
            tableArray.push(<img src={circleIcon} style={{ height: '60%' }} />);
        }
        else {
            tableArray.push(<div> </div>)
        }
    })

    const HomeClasses = ['Home', props.end ? 'EndGame' : '', props.turn ? 'RedTurn' : 'BlueTurn']

    let dialogOpen = false;
    let winnerDivText = ''
    const WinnerDivClasses = ['WinnerDiv']
    const gameTableClasses = ['GameTable']
    if (props.winner === '1') {
        gameTableClasses.push('RedWin');
        WinnerDivClasses.push('RedWinDiv')
        winnerDivText = 'Red Wins :)';
        dialogOpen = true;
    }
    else if (props.winner === '2') {
        gameTableClasses.push('BlueWin');
        WinnerDivClasses.push('BlueWinDiv')
        winnerDivText = 'Blue Wins :)';
        dialogOpen = true;
    }
    else if (props.winner === '0' && props.end) {
        WinnerDivClasses.push('NoWinner')
        winnerDivText = 'We have No Winner :(';
        dialogOpen = true;
    }


    return (
        <div className='GameTable'>

            <div className='GameHomeRow'>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(0)}>{tableArray[0]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(1)}>{tableArray[1]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(2)}>{tableArray[2]}</div>
            </div>
            <div className='GameHomeRow'>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(3)}>{tableArray[3]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(4)}>{tableArray[4]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(5)}>{tableArray[5]}</div>
            </div>
            <div className='GameHomeRow'>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(6)}>{tableArray[6]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(7)}>{tableArray[7]}</div>
                <div className={HomeClasses.join(' ')} onClick={() => props.onClick(8)}>{tableArray[8]}</div>
            </div>
            
            <Button variant='contained'
                style={{ width: '50%', marginTop: '20px', marginBottom: '10px', paddingTop: '15px', paddingBottom: '15px', fontWeight: 'bold' }}
                onClick={props.reset}
                color="primary">Reset</Button>

            <Dialog open={dialogOpen} onClose={props.reset} >
                <DialogTitle >{winnerDivText}</DialogTitle>
            </Dialog>

        </div>
    )
}

export default gameTable;