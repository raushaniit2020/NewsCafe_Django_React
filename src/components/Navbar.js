import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
// import Search from './Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../Firebase';
import { useStateValue } from './StateProvider';
import './Navbar.css';

export default function Navbar(props) {
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    // const navigate = useNavigate();

    const [{ user }, dispatch] = useStateValue();

    const handleOnSubmit = (event) => {
        console.log(value)
        event.preventDefault();
        navigate("/query", {
            replace: true, state: {
                value: value

            }
        })

        // return (
        //     <div>
        //         <Search value={value}/>
        //     </div>
        // )

    }

    const handleLogin = () => {
        if (user) {
            auth.signOut();
        }
    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsCafe</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/general" onClick={function () { props.setCategory("general") }}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/business" onClick={function () { props.setCategory("business") }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/entertainment" onClick={function () { props.setCategory("entertainment") }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/health" onClick={function () { props.setCategory("health") }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/science" onClick={function () { props.setCategory("science") }}>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/sports" onClick={function () { props.setCategory("sports") }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/technology" onClick={function () { props.setCategory("technology") }}>Technology</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><Link className="dropdown-item" to="/country" value="ae" onClick={function () { props.setCountry("ae") }}>United Arab Emirates</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ar" onClick={function () { props.setCountry("ar") }}>Argentina</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="in" onClick={function () { props.setCountry("in") }}>India</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="at" onClick={function () { props.setCountry("at") }}>Austria</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="au" onClick={function () { props.setCountry("au") }}>Australia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="be" onClick={function () { props.setCountry("be") }}>Belgium</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="bg" onClick={function () { props.setCountry("bg") }}>Bulgaria</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="br" onClick={function () { props.setCountry("br") }}>Brazil</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ca" onClick={function () { props.setCountry("ca") }}>Canada</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ch" onClick={function () { props.setCountry("ch") }}>Switzerland</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="cn" onClick={function () { props.setCountry("cn") }}>China</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="co" onClick={function () { props.setCountry("co") }}>Colombia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="cu" onClick={function () { props.setCountry("cu") }}>Cuba</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="cz" onClick={function () { props.setCountry("cz") }}>Czech Republic</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="de" onClick={function () { props.setCountry("de") }}>Germany</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="eg" onClick={function () { props.setCountry("eg") }}>Egypt</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="fr" onClick={function () { props.setCountry("fr") }}>France</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="gb" onClick={function () { props.setCountry("gb") }}>United Kingdom</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="gr" onClick={function () { props.setCountry("gr") }}>Greece</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="hk" onClick={function () { props.setCountry("hk") }}>Hong Kong</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="hu" onClick={function () { props.setCountry("hu") }}>Hungary</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="id" onClick={function () { props.setCountry("id") }}>Indonesia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ie" onClick={function () { props.setCountry("ie") }}>Ireland</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="il" onClick={function () { props.setCountry("il") }}>Israel</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="it" onClick={function () { props.setCountry("it") }}>Italy</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="jp" onClick={function () { props.setCountry("jp") }}>Japan</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="kr" onClick={function () { props.setCountry("kr") }}>South Korea</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="lt" onClick={function () { props.setCountry("lt") }}>Lithuania</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="lv" onClick={function () { props.setCountry("lv") }}>Latvia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ma" onClick={function () { props.setCountry("ma") }}>Morocco</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="mx" onClick={function () { props.setCountry("mx") }}>Mexico</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="my" onClick={function () { props.setCountry("my") }}>Malaysia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ng" onClick={function () { props.setCountry("ng") }}>Nigeria</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="nl" onClick={function () { props.setCountry("nl") }}>Netherlands</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="no" onClick={function () { props.setCountry("no") }}>Norway</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="nz" onClick={function () { props.setCountry("nz") }}>New Zealand</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ph" onClick={function () { props.setCountry("ph") }}>Philippines</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="pl" onClick={function () { props.setCountry("pl") }}>Poland</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="pt" onClick={function () { props.setCountry("pt") }}>Portugal</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ro" onClick={function () { props.setCountry("ro") }}>Romania</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="rs" onClick={function () { props.setCountry("rs") }}>Serbia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ru" onClick={function () { props.setCountry("ru") }}>Russia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="sa" onClick={function () { props.setCountry("sa") }}>Saudi Arabia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="se" onClick={function () { props.setCountry("se") }}>Sweden</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="sg" onClick={function () { props.setCountry("sg") }}>Singapore</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="si" onClick={function () { props.setCountry("si") }}>Slovenia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="sk" onClick={function () { props.setCountry("sk") }}>Slovakia</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="th" onClick={function () { props.setCountry("th") }}>Thailand</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="tr" onClick={function () { props.setCountry("tr") }}>Turkey</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="tw" onClick={function () { props.setCountry("tw") }}>Taiwan</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ua" onClick={function () { props.setCountry("ua") }}>Ukraine</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="us" onClick={function () { props.setCountry("us") }}>United States</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="ve" onClick={function () { props.setCountry("ve") }}>Venezuela</Link></li>
                                    <li><Link className="dropdown-item" to="/country" value="za" onClick={function () { props.setCountry("za") }}>South Africa</Link></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" onSubmit={handleOnSubmit}>
                            <input className="form-control me-2" type="search" name='search' value={value} onChange={(e) => { setValue(e.target.value) }} placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <Link to={!user && '/login'}>
                            <div className="header__login" onClick={handleLogin}>
                                <AccountCircleIcon/>
                                <span className="header__optionLineone">
                                     {!user ? 'Guest' : user?.email.split('@')[0].toUpperCase()}
                                </span><br/>
                                <span className='login__logo'>{user ? 'Sign Out' : 'Sign In'}</span>
                            </div>

                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

