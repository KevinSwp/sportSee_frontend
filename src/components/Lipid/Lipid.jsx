import lipidIcone from './lipid-icon.svg';

function Lipid () {
    return (
        <div className='bloc'>
            <div className='img'>
                <img src={lipidIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>159g</p>
                <p>Lipides</p>
            </div>
        </div>
    )
}

export default Lipid;