import React from 'react';
import  './UserBoard.scss';
import BoardItems from './BoardItems/BoardItems'

function UserBoard()
{
    return(
        <div className="col-2 userboard p-2">
            <div className="userinfo">
                
                <div className="userimg">
                
                </div>
            </div>
            <div className="board">
                <div className="username">
                Mohamamd Modrek
                </div>
                <BoardItems/>
            </div>
        </div>

    )
}

export default UserBoard;