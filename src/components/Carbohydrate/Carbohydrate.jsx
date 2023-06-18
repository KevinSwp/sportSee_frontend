import carbIcone from './carbs-icon.svg';

function Carbohydrate () {
    return (
        <div className='bloc'>
            <div className='img'>
                <img src={carbIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>202g</p>
                <p>Glucides</p>
            </div>
        </div>
    )
}

export default Carbohydrate;