// Import the SVG icon
import carbIcone from './carbs-icon.svg';
// Import AsideFactory component
import useMainData from '../../../factories/AsideFactory';

function Carbohydrate ({ userId }) {
    // Use the AsideFactory function to fetch the carbohydrateCount
    const carbohydrates = useMainData(userId, 'carbohydrateCount');

    return (
        <div className='bloc'>
            <div className='img'>
                <img src={carbIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>{carbohydrates}g</p>
                <p>Glucides</p>
            </div>
        </div>
    )
}

export default Carbohydrate;
