'use client';
import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, resetCount, substractOne } from '@/store/counter/counterSlice';
import React, { useEffect, useState } from 'react'

const getApiCounter = async() => {
    const data = await fetch('/api/counter');
    return await data.json();
}

const CartCounter = ({value = 10}: {value?: number}) => {

    const count = useAppSelector(state => state.counter.count);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        getApiCounter()
        .then(({count}) => dispatch(initCounterState(count)));
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(initCounterState(value));
    // }, [dispatch, value]);
    
  return (
    <>
        <span className="text-9xl">{count}</span>

        <div className="flex">
            <button 
                onClick={() => dispatch(substractOne())}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                -1
            </button>
            <button 
                onClick={() => dispatch(addOne())}
                className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2">
                +1
            </button>
        </div>
    </>
  )
}

export default CartCounter
