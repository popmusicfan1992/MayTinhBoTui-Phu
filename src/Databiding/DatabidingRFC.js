import React from 'react';
const student = {
    name: "A",
    Age: 20,
};
export default function DatabidingRFC() {
    const name2 = 'van phu';
    return (
        <div>
            <h1 className='text-success'> {student.name} da {student.Age} </h1>
        </div>
    );
}
