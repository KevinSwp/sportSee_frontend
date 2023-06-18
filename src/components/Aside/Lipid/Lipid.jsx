// Import the SVG icon
import lipidIcone from './lipid-icon.svg';
// Import AsideUserData component
import AsideUserData from '../AsideUserData';

function Lipid ({ userId }) {
    // Use the AsideUserData function to fetch the lipidCount
    const lipids = AsideUserData(userId, 'lipidCount');

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
