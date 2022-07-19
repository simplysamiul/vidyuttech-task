import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { BiSearch } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import '../../styles/Menubar.css';

const Menubar = () => {
    return (
        <div className='menu-area'>
            <div className="menu-container">
                <div className="menu-content-left">
                    <h3><HiOutlineMenuAlt1 /></h3>
                </div>
                <div className="menu-content-right">
                    <Link to="/"><BiSearch /></Link>
                    <Link to="/"><CgProfile /></Link>
                    <Link to="/"><AiOutlineHeart /></Link>
                    <Link to="/"><BsHandbag /></Link>
                </div>
            </div>
        </div>
    );
};

export default Menubar;