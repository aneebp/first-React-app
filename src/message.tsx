import { useState } from "react";



function ListView(){
    let items = ["Game of Throne","Vampire Diaries","Reverdale","Teen Wolf","The Originals","Beautifull Disaster"]
    const [counter,setcounter] = useState(-1)
    return (
        
        <>
        <h1>MOVIES LIST</h1>
        <ul className="list-group">
            {items.map((item,index) =>(
                    <li key={item} onClick={()=> setcounter(index)} className={
                        counter === index ? "list-group-item active" : "list-group-item"
                    }>{item}</li>
            ))}

</ul>
</>
    )
}

export default ListView;