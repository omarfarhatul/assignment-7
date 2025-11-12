import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
const Player = ({ allplayers,handelSelectedPlayers }) => {
    const {name,image_url,about,price, rating}=(allplayers)
    return (
        <div>
            <div className="card bg-base-100 md:w-96 shadow-sm p-5 rounded-xl">
                <figure>
                    <img
                        src={image_url}
                        alt=""
                        className='w-full h-70 object-fill'/>
                </figure>
                <div className="card-body text-sm">
                    <h2 className="card-title mt-3">
                    <FontAwesomeIcon icon={faUser} /> {name}
                        <div className="badge p-5 md:p-1 badge-secondary">Price: {price}</div>
                    </h2>
                    <h2>Rating: {rating}</h2>
                    <p>About: {about}</p>
                    <div className="card-actions justify-end mt-2">
                        <button  onClick={()=>handelSelectedPlayers(allplayers)} className="bg-green-200 hover:bg-green-400 rounded-full btn badge badge-outline p-4 font-bold">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;