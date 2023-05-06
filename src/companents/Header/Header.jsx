import Button from "../Button/Button";

function Navbar(){
    return(
        <>
        <nav className="nav">
            <form className="form">
            <input type="search"/>
            <button>Search</button>
            </form>
            <Button/>
        </nav>
        </>
    )
}
export default Navbar;