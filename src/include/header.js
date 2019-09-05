import React,{Component} from 'react';

class Header extends Component{
    render(){
        return (
            <div className="row" style={{backgroundColor:"#EFF0F2"}}>
            
            <div className="medium-12 columns">
            
            <ul className="dropdown menu" data-dropdown-menu>
            
            <li className="has-submenu">
            <a href="#">Seller Center |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            
            </ul>
            </li>
            <li className="has-submenu">
            <a href="#">Help |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            
            <li className="has-submenu">
            <a href="#">Buyer Protection |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            
            <li className="has-submenu">
            <a href="#"><i className="fa fa-mobile" aria-hidden="true"></i> App |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            <li className="has-submenu">
            <a href="#">Taka/USD |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            <li className="has-submenu">
            <a href="#">Bangla/English |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            
            <li className="has-submenu">
            <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i> Wish List |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            
            <li className="has-submenu">
            <a href="#"><i className="fa fa-user-o" aria-hidden="true"></i> Account |</a>
            <ul className="submenu menu vertical" data-submenu>
            <li><a href="#">Demo</a></li>
            </ul>
            </li>
            
            
            <li className="has-submenu">
            <a href="#"><img src="image/bd_small.png" alt="company logo"/></a>
            
            
            </li>
            
            
            </ul>
            </div>
            </div>
            
            )
        }
    }
    
    export default Header;