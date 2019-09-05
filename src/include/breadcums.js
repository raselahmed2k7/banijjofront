import React,{Component} from 'react';

class Breadcums extends Component{
    render(){
        return (
            <div className="row">
            <div className="medium-2 large-2 columns">
            <p><img src="/image/asche.jpg" alt="company logo"/></p>

            <p><img src="image/logo_head_left.png" alt="company logo"/></p>

            </div>
            <div className="medium-7 columns">
            <div className="input-group input-group-rounded">
            <input className="input-group-field ex1" type="search" placeholder="Lunch Bag for kid"/>
            <div className="input-group-button">
            <input type="submit" className="button secondary"  value="&nbsp;&nbsp;&nbsp;&nbsp;"/>
            </div>
            </div>
            <ul className="menu">
            <li><a href="#">Kids | </a></li>
            <li><a href="#">dress | </a></li>
            <li><a href="#">diaper | </a></li>
            <li><a href="#">school dress | </a></li>
            <li><a href="#">More..</a></li>
            </ul>
            </div>
            <div className="medium-3 large-3 columns">
            <p><img src="/image/cart.png" alt="company logo"/></p>
            </div>
            </div>
            )
        }
    }
    
    export default Breadcums;