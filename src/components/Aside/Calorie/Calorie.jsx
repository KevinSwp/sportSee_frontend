import calorieIcone from './calories-icon.svg';

function Calories () {
    return (
        <div className='bloc'>
            <div className='img'>
                <img src={calorieIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>????kCal</p>
                <p>Calories</p>
            </div>
        </div>
    )
}

export default Calories;