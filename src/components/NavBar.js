import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FaAlignLeft, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'
import { BsPersonFill } from "react-icons/bs";
import Title from './Title';
import {Dropdown, ButtonGroup,DropdownButton } from 'react-bootstrap'

export class Navbar extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
            showSearch: false,
            showMenu: false,
            scroll: false

        }
    }

    handleinput = event => {
        this.setState({
            search: event.target.value
        })
    }
    handleSearch = () => {
        console.log(this.state.search);

    }

    mysearch = () => {
        this.setState({

            showSearch: !this.state.showSearch
        })
    }
    handleNav = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const top = window.scrollY < 200
            if (top !== true) {
                this.setState({
                    scroll: true
                })

            } else {
                this.setState({
                    scroll: false
                })

            }

        })
    }




    render() {

        const { search, showSearch, showMenu, scroll } = this.state
        return (
            <div className={scroll ? "navBar" : "nav-bar"}>
                <div className="nav-items">
                    <Link className="headerIcon" to="/"><Title /> </Link>

                    <div >
                        <ul className={showMenu ? "show-icon" : "hide-icon"} >
                            <span onClick={this.handleNav}
                                className={!showMenu ? "hide-icon" : "close-icon  closeIcon"} >
                                <IoMdClose /></span>

                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li> <Link to='/about'>About</Link></li>
                            <li>  <Link to='/gallery'>Gallery</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li>

                                <DropdownButton
                                  
                                    title="Pages"
                                    id="dropdown-menu-align-right"
                                    variant="yellow"
                                    className="drope"
                                    
                                >
                                    <Dropdown.Item eventKey="1"><Link to= "/login">Login</Link></Dropdown.Item>
                                    <Dropdown.Item eventKey="2"><Link to= "/chart">Chart</Link></Dropdown.Item>
                                  
                                </DropdownButton>

                            </li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>

                    </div>



                    <div className="search-container">

                        <span className="menu-icon" onClick={this.handleNav} >

                            <span className={showMenu ? "hide-icon" : "show-icon"} ><FaAlignLeft /></span>

                        </span>

                        <form id="search" className="form-inline my-2 my-lg-0" onSubmit={this.handleSearch}>

                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            <span><BsPersonFill /></span>
                            <span><FaShoppingCart /></span>


                        </form>


                        {/* <form >
                        <input className={showSearch ? "show-search" : "hide-search"} type='text'
                            name=" serach" value={search} onChange={this.handleinput} />
                    </form>
                    <span><FaSearch onClick={this.mysearch} /></span> */}

                    </div>

                </div>

            </div>
        )
    }
}

export default React.memo(Navbar)
