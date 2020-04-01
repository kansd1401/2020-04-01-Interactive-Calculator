import React,{useState} from "react";
import {Bar} from 'react-chartjs-2';
import {Form} from 'react-bootstrap'

export default function GrowthInput(props) {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState("");
  const [data, setData] = useState("");

  function submitData(){
    const growth = []
    //later labels can be switched with days or months or years
    const labels = []
    if(value.length && rate.length){
      for(let i = 1;i <= 10;i++){
        labels.push(i)
        if (i === 1){
          growth.push(Number(value))
        }
        else{
          growth.push(growth[i-2] + growth[i-2]*(Number(rate)/100))
        }
      }
      setData({
        labels: labels,
        datasets: [{
        label: "My First dataset",
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: growth,
        }]
      })
    }
  }

  return (
      <div className="growth-input">
        <div>
          <div className="row">
            <div className="col-xs-4">
              <div className="input-group mb-3">
                <input
                  className="form-control inputs"
                  name="value"
                  type="number"
                  placeholder="Initial Value"
                  value={value}
                  onChange={(event) => setValue(event.target.value)}>
                </input>
                <Form.Group controlId="formGridState">
                  <Form.Control as="select" value="Choose...">
                    <option>Choose...</option>
                    <option>Per Month</option>
                    <option>Per Week</option>
                    <option>Per Day</option>
                  </Form.Control>
                </Form.Group>
              </div>
            </div>
            <div className="col-xs-4">
              <div className="input-group mb-3">
                <input
                  className="form-control inputs"
                  aria-label="Username" 
                  aria-describedby="basic-addon1"
                  name="rate"
                  type="number"
                  placeholder="Growth Rate"
                  value={rate}
                  onChange={(event) => setRate(event.target.value)}>
                </input>
                <div className="input-group-prepend">
                  <span className="input-group-text" id="basic-addon1">%</span>
                </div>
              </div>
            </div>
          </div>
          <button className="btn btn-primary" onClick={submitData}>Submit</button>
        </div>
        <div className="chart">
          {data ? < Bar data={data} /> : ""}
        </div>
      </div>
  );
}