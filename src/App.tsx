import ListView from './message'
import Alert from './alert';
import { Button } from './button';
import { useState } from 'react';
function App(){
  const [visibility, setvisibility] = useState(false)

  return (
    <>
    { visibility && <Alert ondelete={()=> setvisibility(false)}>ANeeb</Alert>}
    <Button onSelect={()=> setvisibility(true)}>ANEEB</Button>
    </>
  )
}

export default App;