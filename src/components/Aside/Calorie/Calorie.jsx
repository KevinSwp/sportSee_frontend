// Import the SVG icon
import calorieIcone from './calories-icon.svg';
// Import AsideFactory component
import AsideFactory from '../../../factories/AsideFactory';

function Calories ({ userId }) {
    // Use the AsideFactory function to fetch the calorieCount
    const calories = AsideFactory(userId, 'calorieCount');

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
