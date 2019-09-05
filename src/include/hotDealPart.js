import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ProductDetails from '../product/productDetails';
import {BrowserRouter,Route, Link } from "react-router-dom";

class HotDealPart extends Component{
    constructor(props) {
        super(props);
        // this.toggle = this.toggle.bind(this);
        // this.toggleFade = this.toggleFade.bind(this);
        this.state = {
            productList:[]
        }
        this.imageClick = this.imageClick.bind(this);
    }
    
    componentDidMount() {
        this.getProductList();
    }
    
    // goDetails(){
    //     this.props.history.push("/productDetails");
    // }
    imageClick = () => {
        console.log('Click!!!!');
    } 
    
    getProductList(){
        fetch('/api/product_list', {
            method: 'GET'
        })
        .then(res => {
            console.log(res);
            return res.json()
        })
        .then(products => {
            console.log(products.data); 
            this.setState({ 
                productList : products.data
            })
            console.log('Product Data : ', this.state.productList);
            return false;
        });
    }
    
    
    
    render(){
        return (
            <div className="row">
            
            <div className="medium-12 columns">
            <h5 style={{margin: "0"}} className="text-left">Hot Deal</h5>
            
            <div className="row small-up-5">
            {
                this.state.productList.map(function (product, i) {
                    //   return  <span key={feature.Id}>{feature.Description}</span>
                    return (
                        <div key={product.id} className="column">
                            <Link to={"/productDetails/"+product.id}>
                                <img src={"./image/products/"+product.image} alt="image for article"/>
                            </Link>
                        </div> )
                        
                    })
                }
                </div>
                </div>
                </div>
                )
            }
        }
        
        export default HotDealPart;