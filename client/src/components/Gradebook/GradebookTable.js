import React from "react";
import {Table} from 'react-bootstrap';

const GradebookTable = () => {
    return (
        <Table striped bordered condensed hover>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Last Login</th>
                <th>WWI Assingment</th>                                          
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
        </Table>
    )
}

export default GradebookTable;

//now this is not how the code will actually look like
//the individual students will be pulled into the
//GradebookStudent function, then displayed
//here.  Need a DB first to try

//This is what I think it may look like
// const GradebookTable =({children}) => {
//     <Table striped bordered condensed hover>
//             <thead>
//                 <tr>
//                 <th>#</th>
//                 <th>First Name</th>
//                 <th>Email</th>
//                 <th>Grade</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {children}
//             </tbody>
//     </Table>
// }
