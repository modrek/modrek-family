import React from 'react';
import BoardItem from './BoardItem'

function BoardItems()
{
    let items =[
        {name:'item1' , url:'item1'},
        {name:'item2' , url:'item2'},
        {name:'item3' , url:'item3'},
        {name:'item4' , url:'item4'}
    ]

    return(
        <div>
            {items.map((itm,index) =>{
                return (
                    <BoardItem key={index} name={itm.name} url={itm.url}>
                    </BoardItem>
                    )
                }
            )}
            
        </div>
    )
}

export default BoardItems;