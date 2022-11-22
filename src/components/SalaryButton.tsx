import React  from "react";
import {Button} from "antd"

interface props{
  clickHandler : () => void;
  salary : number;
}

const SalaryButton = ({clickHandler, salary} : props) => {
  console.log("Salary button", salary);
  return (
    <Button onClick = {clickHandler} type = "primary" style = {{margin: 2}}>Increment Salary Button</Button>
  )
}

export default React.memo(SalaryButton);