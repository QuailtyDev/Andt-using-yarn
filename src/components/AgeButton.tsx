import React  from "react";
import {Button} from "antd"

interface props{
  clickHandler : () => void;
  age : number;
}

const AgeButton = ({clickHandler, age} : props) => {
  console.log("age button", age);
  return (
    <Button onClick = {clickHandler} type = "primary" style = {{margin: 2}}>Increment Age Button</Button>
  )
}

export default React.memo(AgeButton);