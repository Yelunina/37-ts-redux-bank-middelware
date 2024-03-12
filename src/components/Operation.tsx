import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deposit, withdraw } from '../actions/accountActions';
import { fetchQuote } from '../actions/quoteAction';

const Operation = () => {
    const [sum, setSum] = useState(0);
    const dispatch = useDispatch();

    return (
        <>
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(withdraw(sum))}
                >Withdraw</button>
                <input
                    className='form-control-lg text-center'
                    onChange={e => setSum(+e.target.value)}
                    type="number"
                    value={sum}
                    min={0}
                />
                <button
                    className='btn btn-primary btn-lg'
                    onClick={() => dispatch(deposit(sum))}
                >Deposit</button>
            </div >
            <div className='d-flex justify-content-center'>
                <button
                    className='btn btn-info btn-lg'
                    onClick={() => dispatch(fetchQuote())}
                >Get Quote</button>
            </div>
        </>
    )
}

export default Operation