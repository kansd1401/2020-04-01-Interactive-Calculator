import React,{useState} from "react";
import "./styles.scss"

export default function GrowthInput(props) {
  const [value, setValue] = useState("");
  const [rate, setRate] = useState("");

  function submitData(){
    const data = []
    for(let i = 1;i <= 10;i++){
      if (i === 1){
        data.push(Number(value))
      }
      else{
        data.push(data[i-2] + data[i-2]*(Number(rate)/100))
      }
    }
    console.log(data)
  }

  return (
      <div className="growth-input">
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
  );
}