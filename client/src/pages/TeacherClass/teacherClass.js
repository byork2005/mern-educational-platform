import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import studentChart from "../../components/TeacherClassStuff";
import "./teacherClass.css";
// import Jumbotron from "../../components/Jumbotron";

const teacherContainer = () =>
  <Container fluid>
    <Row>
      <Col size="lg-1">
      </Col>
      <Col size="lg-3">
      <div class="container">
      <div class="row">
          <div class="well">
              <table class="table table-striped table-condensed">
                  <thead>
                  <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Last Login</th>
                      <th>Status</th>                                          
                  </tr>
              </thead>   
              <tbody>
                  <tr>
                      <td>Mark Green</td>
                      <td>mgreen@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-success">Completed</span>
                      </td>                                       
                  </tr>
                  <tr>
                      <td>Doug Ross</td>
                      <td>dross@awesomeschool.edu</td>
                      <td>2018/02/27</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                       
                  </tr>
                  <tr>
                      <td>Kerry Weaver</td>
                      <td>kweaver@awesomeschool.edu</td>
                      <td>2018/02/25</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Susan Lewis</td>
                      <td>slewis@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-warning">Completed</span></td>                                       
                  </tr>
                  <tr>
                      <td>Peter Benton</td>
                      <td>pbenton@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                        
                  </tr>
                  <tr>
                      <td>John Carter</td>
                      <td>jcarter@awesomeschool.edu</td>
                      <td>2018/02/26</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Carol Hathaway</td>
                      <td>chathaway@awesomeschool.edu</td>
                      <td>2018/02/27</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                        
                  </tr>
                  <tr>
                      <td>Deb Chen</td>
                      <td>dchen@awesomeschool.edu</td>
                      <td>2018/02/22</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                        
                  </tr>
                  <tr>
                      <td>Luka Kovach</td>
                      <td>lkovach@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Rocket Romano</td>
                      <td>rromano@awesomeschool.edu</td>
                      <td>2018/02/26</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Abby Lockhart</td>
                      <td>alockhart@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Elizabeth Corday</td>
                      <td>ecorday@awesomeschool.edu</td>
                      <td>2018/02/20</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                        
                  </tr>
                  <tr>
                      <td>Lucy Knight</td>
                      <td>lknight@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Tony Gates</td>
                      <td>tgates@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-success">Completed</span></td>                                        
                  </tr>
                  <tr>
                      <td>Archie Morris</td>
                      <td>amorris@awesomeschool.edu</td>
                      <td>2018/02/28</td>
                      <td><span class="label label-warning">Incomplete</span></td>                                        
                  </tr>                                   
              </tbody>
              </table>
              </div>
            </div>
        </div>
      </Col>
      <Col size="lg-4">
        <Container>
            <h1 className="aHeader">Annoucements</h1>
            <div class="bs-calltoaction bs-calltoaction-default">
                <div class="row">
                    <div class="col-md-9 cta-contents">
                        <h1 class="cta-title">Trivia Game</h1>
                        <div class="cta-desc">
                            <p>This should not be difficult.  You do have the greatest teacher ever.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="bs-calltoaction bs-calltoaction-primary">
                <div class="row">
                    <div class="col-md-9 cta-contents">
                        <h1 class="cta-title">Check New Activites</h1>
                        <div class="cta-desc">
                            <p>There are some new activites, make sure you check and familarize yourself with them.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="bs-calltoaction bs-calltoaction-success">
                <div class="row">
                    <div class="col-md-9 cta-contents">
                        <h1 class="cta-title">Welcome!</h1>
                        <div class="cta-desc">
                            <p>Welcome to the class! You are very privlidged to be taught be some really super smart people, who will not referance poo.</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <textarea rows="4" cols="50" className="textarea">
            
            </textarea>
            <a href="ppc.html" class="btn btn-block btn-primary">Send</a>
        </Container>
      </Col>
      <Col size="lg-3">
        <Container>
            <Row className="text-center">
                <div class="box red">
                        <div class="box-content">
                            <h1 class="tag-title">Trivia</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra quam sollicitudin nibh aliquam finibus. Etiam efficitur felis vel imperdiet varius. Maecenas bibendum elementum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus finibus semper. Fusce molestie tincidunt leo vel varius. Nam scelerisque nulla feugiat leo consequat, id dignissim sem tincidunt. Proin elit mauris, hendrerit in varius sed, facilisis sit amet neque.</p>
                            <br />
                            <a href="ppc.html" class="btn btn-block btn-primary">Play</a>
                        </div>
                    </div>
            </Row>
            <Row className="text-center">
                <div class="box blue">
                        <div class="box-content">
                            <h1 class="tag-title">Hangman</h1>
                            <hr />
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pharetra quam sollicitudin nibh aliquam finibus. Etiam efficitur felis vel imperdiet varius. Maecenas bibendum elementum molestie. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus finibus semper. Fusce molestie tincidunt leo vel varius. Nam scelerisque nulla feugiat leo consequat, id dignissim sem tincidunt. Proin elit mauris, hendrerit in varius sed, facilisis sit amet neque.</p>
                            <br />
                            <a href="ppc.html" class="btn btn-block btn-primary">Play</a>
                        </div>
                    </div>
            </Row>
            
        </Container>
      </Col>
      <Col size="lg-1">
      </Col>
    </Row>
  </Container>;

export default teacherContainer;
