import proteinIcone from './protein-icon.svg';

function Protein () {
    return (
        <div className='bloc'>
            <div className='img'>
                <img src={proteinIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>19g</p>
                <p>Proteines</p>
            </div>
        </div>
    )
}

export default Protein;