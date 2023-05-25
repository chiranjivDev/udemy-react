import DUMMY_MEALS from './dummyMeals';
import './availableMeals.css';
import Card from '../ui/Card';
import MealItem from './mealItem/MealItem';

const AvailableMeals = () => {
    return <section className='meals'>
        <Card>
            <ul>
             {
                DUMMY_MEALS.map((meal)=>{
                    return <MealItem {...meal} key={meal.id}/>
                })
             } 
            </ul>
        </Card>
    </section>
};

export default AvailableMeals;