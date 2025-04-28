import React from 'react';
import {useState, useMemo} from 'react';

const CalculatorMemo = () => {
    const [count, setCount] = useState(0);
    const complexMultiply = (num: number) => {
        return num * 2;
    }
    const getRandomNum = (): number  => {
        const getNum = Math.floor(Math.random() * 10);
        console.log(getNum)
        return getNum
    }

    const calc = (sign: string) => {
        const getNum = getRandomNum();
        switch(sign) {
            case '+': setCount((c) => c + getNum); break;
            case '-': setCount((c) => c - getNum >= 0 ? c - getNum : 0); break;
            case '/': setCount((c) => c / getNum >= 0 ? c / getNum : 0); break;
            case '*': setCount((c) => c * getNum); break;
        }
    }

    const memorizedValue = useMemo(() => complexMultiply(count), [count]);
    return (
        <>
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl text-blue-500 font-bold mb-4">Memo Calculator</h1>
                <div className="mb-2">Count: {count}</div>
                <div className="mb-4">Memorized Value: {memorizedValue}</div>
                <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => calc("+")}>+</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => calc("-")}>-</button>
                    <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={() => calc("*")}>*</button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => calc("/")}>/</button>
                </div>
            </div>
        </>
    )
};

export default CalculatorMemo;