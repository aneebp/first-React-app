import ListView from './message'

function App(){
  let items = ["Game of Throne","Vampire Diaries","Reverdale","Teen Wolf","The Originals","Beautifull Disaster"]
  let selectedItem = (item:string)=>{return console.log(item)}
  return <div><ListView items={items} heading='MOvies' onSelectedItem={selectedItem}></ListView></div>;
}

export default App;