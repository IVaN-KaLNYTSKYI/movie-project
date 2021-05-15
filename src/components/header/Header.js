import {Link} from "react-router-dom";
import './Header.css'

export default function Header() {
    return (
        <div className={"header-conteiner"}>
            <div className={"header"}>
                <ul className={"header-ul"}>
                    <li className={"header-li"}>
                        <Link className={"header-a"} to="/">Home</Link>
                    </li>
                    <li className={"header-li"}>
                        <Link className={"header-a"} to="/movie">Movie</Link>
                    </li>
                    <li className={"header-li"}>
                        <Link className={"header-a"} to="/like">Like</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}