import React, {useState} from 'react';
import AgeButton from './AgeButton'
import SalaryButton from './SalaryButton'

interface Props {
};

const AdvancedHooksComponent: React.FC<Props> = () => {
    const [age, setAge] = useState(12);
    const [salary, setSalary] = useState(5000);

    const ageHandler = () => {
        setAge(age + 1);
    }

    const salaryHandler = () => {
        setSalary(salary + 1);
    }

    return (
        <div>
            <h1>Advanced Hooks Component</h1>
            <AgeButton clickHandler = {ageHandler} age = {age} />
            <SalaryButton clickHandler = {salaryHandler} salary={salary} />
        </div>
    );
};

export default AdvancedHooksComponent;