import './css/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Header() {
    return (
        <header className='header'>
            <div className="row p-4">
                <div className="col-12 col-xs-12 col-md-12  text-center">
                    <h1>
                        Dashboard
                    </h1>
                </div>
            </div>
        </header>


        
    );
}
export default Header;