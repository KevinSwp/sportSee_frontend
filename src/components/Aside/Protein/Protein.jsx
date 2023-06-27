// Import the SVG icon
import proteinIcone from './protein-icon.svg';
// Import AsideFactory component
import AsideFactory from '../../../factories/AsideFactory';

function Protein ({ userId }) {
    // Use the AsideFactory function to fetch the proteinCount
    const proteins = AsideFactory(userId, 'proteinCount');

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
