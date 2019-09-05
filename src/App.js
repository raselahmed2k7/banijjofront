import React,{Component} from 'react';
import Header from './include/header';
import Breadcums from './include/breadcums';
import RightSideBar from './include/rightsidebar';
import HotDealPart from './include/hotDealPart';

class App extends Component{
  render(){
    return (
      <div className="App">
          <div className="top-bar">
      <div className="row">
        <div className="top-bar-left">
      
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
<Header/>

    <br/>
    
 <Breadcums/>  
   
    <div className="row">
      <div className="medium-2 large-2 columns">
        <h5>  <button><i className="fa fa-list-ul" aria-hidden="true"></i></button> Category</h5>
       
      </div>
  
  
      <div className="medium-7 columns">
        <img className="thumbnail" src="image/slider_banner.png"/>
        <div className="row small-up-5">
          <div className="column">
            <img className="thumbnail" src="image/slider_small1.png"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="image/slider_small2.png"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="image/slider_small3.png"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="image/slider_small4.png"/>
          </div>
          <div className="column">
            <img className="thumbnail" src="image/slider_small5.png"/>
          </div>
        </div>
      </div>
      
 <RightSideBar/>
  
  </div>
  
  <HotDealPart/>
  
  
    <div className="row">
      <div className="row column">
        <p>&nbsp;</p>
  
      </div>
  
  
      <div className="medium-6 columns">
        <h5 style={{margin: 0}} className="text-left">Top Selection</h5>
          <div className="row small-up-4">
            <div className="column">
              <img className="thumbnail" src="image/top_selection.png"/>
            </div>
            <div className="column">
              <img className="thumbnail" src="image/top_selection.png"/>
            </div>
            <div className="column">
              <img className="thumbnail" src="image/top_selection.png"/>
            </div>
            <div className="column">
              <img className="thumbnail" src="image/top_selection.png"/>
            </div>
          </div>
        </div>
  
  
        <div className="medium-6 columns">
          <h5 style={{margin: "0"}} className="text-left">New For You</h5>
            <div className="row small-up-4">
              <div className="column">
                <img className="thumbnail" src="image/top_selection.png"/>
              </div>
              <div className="column">
                <img className="thumbnail" src="image/top_selection.png"/>
              </div>
              <div className="column">
                <img className="thumbnail" src="image/top_selection.png"/>
              </div>
              <div className="column">
                <img className="thumbnail" src="image/top_selection.png"/>
              </div>
  
            </div>
          </div>
        </div>
  
        <div className="row">
          <div className="row column">
            <p>&nbsp;</p>
  
          </div>
  
  
  
          <div className="medium-6 columns">
          <h5 style={{margin: "0"}} className="text-left">Top Selection</h5>
              <div className="row small-up-2">
                <div className="column">
                  <img className="thumbnail" src="image/feature_band.png"/>
                </div>
                <div className="column">
                  <img className="thumbnail" src="image/feature_band.png"/>
                </div>
  
              </div>
            </div>
  
  
            <div className="medium-6 columns">
              <h5 style={{margin: "0"}} className="text-left">Stores You'all Love</h5>
                <div className="row small-up-2">
                  <div className="column">
                    <img className="thumbnail" src="image/feature_band.png"/>
                  </div>
                  <div className="column">
                    <img className="thumbnail" src="image/feature_band.png"/>
                  </div>
  
                </div>
              </div>
            </div>
  
  
            <div className="row">
              <div className="row column">
                <p>&nbsp;</p>
  
              </div>
              <h5 style={{margin: 0,paddingLeft: "15px"}} className="text-left">Featured Categories</h5>
                <div className="medium-3 columns">
                  <div className="row">
                    <div className="medium-2 columns">
  
                      <p>&nbsp;</p>
                      <p>&nbsp;</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="medium-8 columns">
  
                      <p><img src="image/feature_cat_big.png" alt="main article image"/></p>
                    </div>
                    <div className="medium-4 columns">
  
                      <p><img src="image/feature_cat_sm_blue.png" alt="main article image"/></p>
                      <p><img src="image/feature_cat_sm_blue.png" alt="main article image"/></p>
                    </div>
                    <div className="medium-4 columns">
                      </div>
                  </div>
  
                </div>
  
  
                <div className="medium-3 columns" style={{paddingLeft:"25px"}}>
  
  
                  <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Snow" />
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Forest"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div><br/>
  
                  <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Snow" />
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Forest"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div>
  
  
                </div>
  
  
                <div className="medium-3 columns" style={{paddingLeft: "25px"}}>
  
  
                <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Snow" />
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Forest"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div>
                  <br/>
  
                  <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Snow" />
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Forest"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div>
  
  
                </div>
  
  
                <div className="medium-3 columns" style={{paddingLeft:"25px"}}>
                  
  
                <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div><br/>
  
                  <div className="row" style={{border: "2px",borderStyle:"solid #5698C5",borderSpacing:"5px"}}>
                    <h5>&nbsp;&nbsp;&nbsp;Sub category</h5>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                    <div className="medium-4 columns">
                      <img src="image/feature_cat_sm_red.png" alt="Mountains"/>
                    </div>
                  </div>
  
  
                </div>
  

              </div>
  
              <div className="row">
                <div className="row column">
                  <p>&nbsp;</p>
  
                </div>
  
  
                <div className="medium-12 columns">
                  <h5 style={{margin: 0}} className="text-left">More</h5>
  
                    <div className="row small-up-6">
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                      <div className="column">
                        <img src="image/more.png" alt="image for article"/>
                      </div>
                    </div>
                  </div>
                </div>
  
                <div className="row column">
                  <hr/>
                  <ul className="menu">
                    <li>Yeti Store</li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li className="float-right">Copyright 2016</li>
                  </ul>
                </div>
      </div>
    );
  }
}

export default App;
