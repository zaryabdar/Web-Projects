 document.addEventListener("keydown", function(event){
        let key = event.key;
        if(!isNaN(key)){
          console.log(key +'is pressed');
          updateCalculation(key);
        }
        else if(['+','-','*','/','.'].includes(key)){
          updateCalculation(key);
        }
        else if(key==='Backspace'){
            backspace();
        }
        else if(key==='Enter'){
            calculate();
          }
        else if(key==='Escape'){
          cleardisplay();
        }
      });
let calculation = localStorage.getItem('calculation')||'';
        
      function updateCalculation(value) {
        calculation += value;
        showdisplay();
        localStorage.setItem('calculation',calculation);
      }
      function backspace(){
        calculation= calculation.slice(0, -1);
        showdisplay();
        localStorage.setItem('calculation',calculation);
        
      }
      function calculate(){
        // eval() takes a string and runs it as code
        calculation = eval(calculation);
        showdisplay();
        localStorage.setItem('calculation',calculation);
      }
      function cleardisplay(){
        calculation = '';
        showdisplay();
        localStorage.setItem('calculation',calculation);
      }
      function showdisplay(){
        document.querySelector('.calculator-display').innerText= calculation;
      }