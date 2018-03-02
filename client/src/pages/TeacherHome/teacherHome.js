import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./teacherHome.css";

const teacherContainer = () =>
<Container fluid>
<div className="well">
      <div className="media">
      	<a className="pull-left" href="#">
    		<img className="media-object" src="http://via.placeholder.com/150x150"/>
  		</a>
  		<div className="media-body">
    		<h4 className="media-heading">History 101</h4>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
Aliquam in felis sit amet augue.</p>
          <ul className="list-inline list-unstyled">
  			<li><span><i className="glyphicon glyphicon-calendar"></i> 4 days, 2 hours </span></li>
            
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
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pharetra varius quam sit amet vulputate. 
Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis 
dolor, in sagittis nisi. Sed ac orci quis tortor imperdiet venenatis. Duis elementum auctor accumsan. 
Aliquam in felis sit amet augue.</p>
          <ul className="list-inline list-unstyled">
  			<li><span><i className="glyphicon glyphicon-calendar"></i> 2 days, 8 hours </span></li>
            
			</ul>
       </div>
    </div>
  </div>





</Container>
export default teacherContainer;
