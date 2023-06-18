// Import the SVG icon
import proteinIcone from './protein-icon.svg';
// Import AsideUserData component
import AsideUserData from '../AsideUserData';

function Protein ({ userId }) {
    // Use the AsideUserData function to fetch the proteinCount
    const proteins = AsideUserData(userId, 'proteinCount');

    return (
        <div className='bloc'>
            <div className='img'>
                <img src={proteinIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>{proteins}g</p>
                <p>Proteines</p>
            </div>
        </div>
    )
}

export default Protein;
