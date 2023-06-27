// Import the SVG icon
import lipidIcone from './lipid-icon.svg';
// Import AsideFactory component
import AsideFactory from '../../../factories/AsideFactory';

function Lipid ({ userId }) {
    // Use the AsideFactory function to fetch the lipidCount
    const lipids = AsideFactory(userId, 'lipidCount');

    return (
        <div className='bloc'>
            <div className='img'>
                <img src={lipidIcone} alt="#" />
            </div>
            <div className='text'>
                <p className='nb'>{lipids}g</p>
                <p>Lipides</p>
            </div>
        </div>
    )
}

export default Lipid;
