import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import DeleteBtn from "../../components/DeleteBtn";
import "./studentHome.css";

const studentContainer = () =>
<Container fluid>
<div className="well">
      <div className="media">
      	<a className="pull-left" href="#">
    		<img className="media-object" src="http://via.placeholder.com/150x150"/>
  		</a>
  		<div className="media-body">
    		<h4 className="media-heading">History 101</h4>
          <p className="text-right">Professor Spencer</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
Aliquam in felis sit amet augue.</p>
          <ul className="list-inline list-unstyled">
  			<li><span><i className="glyphicon glyphicon-calendar"></i> 4 days, 2 hours </span></li>
            <li>|</li>
            <span><i className="glyphicon glyphicon-comment"></i> 1 comment</span>
            <li>|</li>
            <li>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
            </li>
            <li>|</li>
			</ul>
       </div>
    </div>
  </div>
   <div className="well">
      <div className="media">
  		<a className="pull-left" href="#">
    		<img className="media-object" src="http://via.placeholder.com/150x150"/>
  		</a>
  		<div className="media-body">
    		<h4 className="media-heading">Math 101</h4>
          <p className="text-right">Ms. Teacher</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
Aliquam in felis sit amet augue.</p>
          <ul className="list-inline list-unstyled">
  			<li><span><i className="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
            <li>|</li>
            <span><i className="glyphicon glyphicon-comment"></i> 2 comments</span>
            <li>|</li>
            <li>
               <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star"></span>
                        <span className="glyphicon glyphicon-star-empty"></span>
            </li>
            <li>|</li>
			</ul>
       </div>
    </div>
  </div>





</Container>
export default studentContainer;
