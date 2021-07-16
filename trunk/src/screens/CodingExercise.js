import React  from "react";
import styled from "styled-components";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {validateInput,testSamples} from './Util';


class CodingExercise extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: '',
      rows: []
    };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleTest = this.handleTest.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleTest()
    {
      var sample =['6','75','167p','4p','1.97','£1.33','£2','£20','£1.97','£1p','£1.p','001.61p','6.235p','£1.256532677p','','1x','£1x.0p','£p'];
      for (var i=0;i<sample.length;i++)
      {
        console.log('----------------------------------');
        testSamples(sample[i]);
        console.log('----------------------------------');
      }
    }

    //function to handle submit event.
    handleSubmit(event) {
      var val = this.state.value;
      
      val = validateInput(val);

      if(isNaN(val))
      {
        console.log(val);
        alert(val);
        return;
      }
        
      
      //defined a hardcoded array of required calculation against values are to be checked.
      var arr = [200,100,50,20,10,5,2,1];

      var updatedRows = [];
      for (var i=0;i<arr.length;i++)
      {
        //dividing value against each value in array.
        //if response is greater than 0 then add it in table rows and then multiply the response from divide with the array position value minus the actual value.
        //update that to actual value and use that value to iterate other missing array elements.
        var remainder = parseInt(val/arr[i]);
        if(remainder!="0")
        {
          console.log(arr[i] +" "+ remainder);
          val = val - (remainder * arr[i]);
          if(arr[i] == 100)
            arr[i] = '₤1';
          else if(arr[i] == 200)
            arr[i] = '₤2';
          else
            arr[i] = arr[i]+'p';

          updatedRows.push({sterling : arr[i], count : remainder});
        }
      }
      
      //used state to update the rows dynamically
      this.setState({
        rows: updatedRows 
      });
    }
render() {
  return (

    <Container>
      <Title>Coding Exercise :</Title>
      <ProblemStatement>Problem Statement :</ProblemStatement>
      <Paragraph>
        Write an application that given a number of pennies will calculate the
        minimum number of Sterling coins equivalent to that amount.{"\n"}Eg.
        123p = 1 x £1, 1 x 20p, 1 x 2p, 1 x 1p
      </Paragraph>

      <form>
      <Rect2>
        <label style={{ marginTop:"5%"}}>
          <InsertValue>Insert Value:</InsertValue>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="button" value="Submit" onClick={() => this.handleSubmit()} style={{ width:"15%", marginLeft:"60%"}}/>
        <InsertValue >Click on Test to see sample output browser in console :</InsertValue>
        <input type="button" value="Test" onClick={() => this.handleTest()} style={{width:"15%", marginLeft:"60%"}}/>
        </Rect2>
      </form>

      <TableContainer >
      <Table style={{width: '50%',backgroundColor:'rgba(95,75,139,1)',color: 'rgba(227,159,141,1)',marginLeft: '44px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{color: 'rgba(227,159,141,1)'}}>Sterling coins</TableCell>
            <TableCell style={{color: 'rgba(227,159,141,1)'}} align="right">Minimum number of Sterling coins</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.state.rows.map((row) => (
            <TableRow key={row.sterling}>
              <TableCell style={{color: 'rgba(227,159,141,1)'}} component="th" scope="row">
                {row.sterling}
              </TableCell>
              <TableCell style={{color: 'rgba(227,159,141,1)'}} align="right">{row.count}</TableCell>
            </TableRow>
          ))}
          
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  background-color: rgba(95,75,139,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Rect2 = styled.div`
  width: 572px;
  height: 179px;
  background-color: rgba(227,159,141,1);
  flex-direction: column;
  display: flex;
  margin-top: 50px;
  margin-left: 44px;
`;

const InsertValue = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  color: rgba(95,75,139,1);
  font-size: 18px;
  margin-top: 46px;
  margin-left: 14px;
`;

const Paragraph = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(227,159,141,1);
  font-size: 20px;
  margin-top: 20px;
  margin-left: 44px;
`;

const ProblemStatement = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(227,159,141,1);
  font-size: 31px;
  margin-top: 20px;
  margin-left: 44px;
`;

const Title = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(227,159,141,1);
  font-size: 45px;
  margin-top: 10px;
  margin-left: 44px;
`;

export default CodingExercise;
