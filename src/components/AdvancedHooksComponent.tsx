import React, {useState, useCallback, useMemo, useEffect, useRef} from 'react';
import AgeButton from './AgeButton'
import SalaryButton from './SalaryButton'

interface Props {
};

const AdvancedHooksComponent: React.FC<Props> = () => {
    const [age, setAge] = useState(12);
    const [salary, setSalary] = useState(5000);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if(inputRef && inputRef.current){
            console.log(inputRef,"sdfdfs")
            inputRef.current.focus();
        }
    }, [])

    const MemoizedValue = useMemo(() => {
        // some complex computation work here..
        let i = 0;
        while (i < 2000000000) i++;

        // after while break then do something here
        if(age % 2 === 0) return "Even";
        else return "Odd";
      }, [age])

    const ageHandler = useCallback (() => {
        setAge(age + 1);
    },[age])

    const salaryHandler = useCallback (() => {
        setSalary(salary + 1);
    }, [salary])

    return (
        <div>
            <h1>Advanced Hooks Component</h1>
            <input type="text" ref={inputRef} style={{width:'40'}} />
            <h3>{MemoizedValue}</h3>
            <AgeButton clickHandler = {ageHandler} age = {age} />
            <SalaryButton clickHandler={salaryHandler} salary={salary}/>
        </div>
    );
};

export default AdvancedHooksComponent;