export default class Count extends React.Component {
    render() {
      return (
        <>
    <h1>BMI test</h1>

    <div onChange={() => this.functionBmi()}>
      <label>Enter weight in (Kg): </label>
      <input onChange={() => this.numberPositive()} type="number" id="m"></input>
      <label>Enter height in (cm): </label>
      <input onChange={() => this.numberPositive()} type="number" id="L"></input>
      <p id="bmi"></p>
      <p id="status"></p>
    </div>
    </>
    );
    }

    functionBmi() {
        var x = document.getElementById("m").value;
        var y = document.getElementById("L").value / 100;
        var z = x / (y ** 2);
        if (x == 0 && y == 0) {
            document.getElementById("bmi").innerHTML = "You must enter weight and height";
        } else if (x == 0) {
            document.getElementById("bmi").innerHTML = "You must enter weight";
        } else if (y == 0) {
            document.getElementById("bmi").innerHTML = "You must enter height";
        } else {
            document.getElementById("bmi").innerHTML = "Your BMI is: " + z.toFixed(2);
        }
     
        if (x == 0 || y == 0) {
            document.getElementById("status").innerHTML = "";
        } else if (z <= 16.5) {
            document.getElementById("status").innerHTML = "You have lethal underweight";
        } else if (z <= 18.5) {
            document.getElementById("status").innerHTML = "You have underweight";
        } else if (z <= 25) {
            document.getElementById("status").innerHTML = "You have Healthy weight";
        } else if (z <= 30) {
            document.getElementById("status").innerHTML = "You have Overweight";
        } else if (z <= 35) {
            document.getElementById("status").innerHTML = "You have Obese class I";
        } else if (z <= 40) {
            document.getElementById("status").innerHTML = "You have Obese class II";
        } else if (z > 40) {
            document.getElementById("status").innerHTML = "You have Obese class III";
        } 
    
    }
    
    numberPositive() {
        var x = document.getElementById("m").value;
        var y = document.getElementById("L").value;
        if (x < 0) {
            x *= -1;
        document.getElementById("m").value = x;
        } 
        if (y < 0) {
            y *= -1;
        document.getElementById("L").value = y;
        } 
    }

}

