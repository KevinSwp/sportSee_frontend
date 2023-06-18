// Import the SVG icon
import calorieIcone from './calories-icon.svg';
// Import AsideUserData component
import AsideUserData from '../AsideUserData';

function Calories ({ userId }) {
    // Use the AsideUserData function to fetch the calorieCount
    const calories = AsideUserData(userId, 'calorieCount');

    return (
        <div className='bloc'>
            <div className='img'>
                <img src={calorieIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>{calories}kCal</p>
                <p>Calories</p>
            </div>
        </div>
    )
}

export default Calories;
