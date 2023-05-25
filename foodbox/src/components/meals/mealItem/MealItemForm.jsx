import { useRef } from 'react';
import './mealItemForm.css';

const MealItemForm = ({onAddToCart}) => {

    const amountInputRef = useRef();

    const submitHandler = (e) => {
        e.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5 ){
            return;
        }

        onAddToCart(enteredAmountNum)

    };  

    return (
        <form className='form' onSubmit={submitHandler}>
            <div className='input'> 
                <label htmlFor='amount'>Qty</label>
                <input id="amount" type="number" min={1} max={5} defaultValue={1} ref={amountInputRef }/>
            </div>
            <button>+  Add</button>
        </form>
    )
};

export default MealItemForm;