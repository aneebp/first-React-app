import { useState } from "react";

interface Props{
    items : string[];
    heading : string
    onSelectedItem : (item : string)=> void
}

function ListView(Props: Props){
    const [counter,setcounter] = useState(-1)
    return (
        
        <>
        <h1>{Props.heading}</h1>
        <ul className="list-group">
            {Props.items.map((item,index) =>(
                    <li key={item} onClick={()=> {setcounter(index);
                        Props.onSelectedItem(item);}
                    } className={
                        counter === index ? "list-group-item active" : "list-group-item"
                    }>{item}</li>
            ))}

</ul>
</>
    )
}

export default ListView;