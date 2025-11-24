function calculate() {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    fetch(`/add?num1=${num1}&num2=${num2}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("result").innerHTML =
                "Result: " + data.result;
        })
        .catch(err => console.error(err));
}
