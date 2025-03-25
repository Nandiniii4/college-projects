const form = document.querySelector('form');
//const height = parseInt(document.querySelector('.height').value) --> this will give empty values


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value) //for input values they are string so convert them to int
  const weight = parseInt(document.querySelector('#weight').value)

  const result = document.querySelector('#results');

  if(height === '' || height <= 0 || isNaN(height)){
    result.innerHTML = "Please give a valid height";
  }else if(weight === '' || weight <= 0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight";
  }else{
    const bmi = (weight/((height *height)/10000)).toFixed(2);
    let msg = "";
    if(bmi < 18.6){
      msg = "Underweight";
    }else if(bmi >= 18.6 && bmi <= 24.9){
      msg = "Normal Range";
    }else{
      msg = "Overweight";
    }
    result.innerHTML = `<span>${bmi},${msg}</span>`
  }
})