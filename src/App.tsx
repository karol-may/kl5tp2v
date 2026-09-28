import './App.css'

type NewComponentProps = {
  value: string, 
  numberValue: number
  arrayValue?: []
  onClick: ()=>{}
}

function NewComponent(
  props: NewComponentProps
){
  return(<p onClick={props.onClick}>{props.value} {props.numberValue}</p>);
}

function App() {
 
  return (
    <>      
      <NewComponent 
        value={"text"}
        numberValue={0}
        arrayValue={[]} 
        onClick={function (): {} {
          throw new Error('Function not implemented.')
        } }      
        />
    </>
  )
}

export default App
