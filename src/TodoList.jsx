
import React, { useState } from "react";

function TodoList(){
    const [activity, setActivity] = useState("");
    const [listData, setListData] = useState([]);

    function addActivity(){
    //  setListData([...listData, activity])
    //  console.log(listData);
    setListData((listData)=>{
        const updatelist = [...listData, activity]
        console.log(updatelist)
        setActivity("")
        return updatelist
        
    })}

    function removeActivity(i){
   const updatedListData =  listData.filter((elem, id)=>{
    return i!=id;
   })
   setListData(updatedListData);
    }

    function removeAll(){
        setListData([])
    }

    return(
        <>
        <div className="container">
            <h1 className="containerh1">Zulfiqar Ali</h1>
            <div className="header">TODO LIST</div>
            <input type="text"placeholder="Add Activity" value={activity} onChange={(e)=> 
                setActivity(e.target.value)}/>
                <button onClick={addActivity}>ADD</button>
                <p className="List-heading">Here is your Todo List ^.^</p>
                {listData!=[] && listData.map((data, i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className="listData">{data}</div>
                            <div className="btn-position"><button onClick={()=>removeActivity(i)}>Remove(-)</button></div>
                        </p>
                        </>
                    )
                })}
                {listData.length>=1 && <button id="removeThis" onClick={removeAll}>Remove All</button>}
        </div>
        </>
    )
}

export  default TodoList;