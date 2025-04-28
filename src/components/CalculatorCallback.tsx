import {useState, useCallback} from 'react';
import React from 'react';
import ChildCallback from './ChildCallback';

const CalculatorCallback = () => {
    const [count, setCount] = useState(0);
    const [other, setOther] = useState(0);
    const getRandomNum = (): number  => {
        const getNum = Math.floor(Math.random() * 10);
        console.log(getNum)
        return getNum
    }
    const calc = useCallback((sign: string) => {
        const getNum = getRandomNum();
        switch(sign) {
            case '+': setCount((c) => c + getNum); break;
            case '-': setCount((c) => c - getNum >= 0 ? c - getNum : 0); break;
            case '/': setCount((c) => c / getNum >= 0 ? c / getNum : 0); break;
            case '*': setCount((c) => c * getNum); break;
        }
    },[]);
    return (
        <>
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl text-blue-500 font-bold mb-4">CallBack Calculator</h1>
                <div className="mb-2">Count: {count}</div>
                <div className="mb-2">Other count: {other}</div>
                <div className="flex gap-2">
                    <h2 className="text-2xl text-blue-500 font-bold mb-4">Count panel</h2>
                    <ChildCallback calc={calc}/>
                </div>
                <div className="flex gap-2">
                    <h2 className="text-2xl text-blue-500 font-bold mb-4">Other panel</h2>
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => setOther((o) => o + 1)}>+</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => setOther((o) => o - 1)}>-</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => setOther((o) => o * 2)}>*</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setOther((o) => o / 2)}>/</button>
                </div>
            </div>
        </>
    )
    
};

export default CalculatorCallback;