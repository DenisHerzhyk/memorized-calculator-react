import React from 'react';
import {useState, useMemo} from 'react';

const CalculatorMemo = () => {
    const [count, setCount] = useState(0);
    const [random, setRandom] = useState(0);
    const [sign, setSign] = useState('+');
    const [prev, setPrev] = useState(0);
    const complexMultiply = (num: number) => {
        return num * 2;
    }
    const getRandomNum = (): number  => {
        return Math.floor(Math.random() * 10);
    }

    const calc = (sign: string) => {
        const getNum = getRandomNum();
        setRandom(getNum);
        setSign(sign);
        setCount((c) => {
            setPrev(c);
            switch(sign) {
                case '+': return c + getNum;
                case '-': return c - getNum;
                case '/': return c / getNum;
                case '*': return c * getNum;
                default: return c;
            }
        });
    }

    const memorizedValue = useMemo(() => complexMultiply(count), [count]);
    return (
        <>
            <div className="flex flex-col items-center p-6">
                <h1 className="text-2xl text-blue-500 font-bold mb-4">Memo Calculator</h1>
                <div className="text-gray-500">Prev count: {prev}, Second random value for calculation: {random}</div>
                <div>Operation: {prev} {sign} {random}</div>
                <div className="mb-2">Count: {count}</div>
                <div className="mb-4">Memorized Value: {memorizedValue} <span className="font-bold text-gray-500">(multiplying by 2)</span></div>
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