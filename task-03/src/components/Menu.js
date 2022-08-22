import logo from '../img/logo-taranto.png';
import Dropdown from './Dropdown';
const Menu = () => {
    return (
        <div>
            <nav className="relative container mx-auto p-9">
                <div className="flex items-center justify-between">
                    <div className="pt-2">
                        <a href="#"><img src={logo} alt="logo"></img> </a>
                    </div>
                    <div className="hidden md:flex">
                        <Dropdown />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Menu;