import {Link} from "react-router-dom";
import './Header.css'

export default function Header({flag}) {

    return (
        <div className={flag?"header-conteiner-dark":"header-conteiner"}>
            <div className={"header"}>
                <ul className={"header-ul"}>
                    <li className={"header-li"}>
                        <Link className={flag?"header-a-dark":"header-a"} to="/">Home</Link>
                    </li>
                    <li className={"header-li"}>
                        <Link className={flag?"header-a-dark":"header-a"} to="/movies">Movie</Link>
                    </li>
                    <li className={"header-li"}>
                        <Link className={flag?"header-a-dark":"header-a"} to="/like">Like</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}