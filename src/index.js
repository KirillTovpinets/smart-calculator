class SmartCalculator {
  constructor(initialValue) {
    this.value = initialValue;
    this.result = 0;
    this.exp = [];
  }

  add(number) {
    this.exp.push('+');
    this.exp.push(number)
    return this;
  }
  
  subtract(number) {
    this.exp.push('-');
    this.exp.push(number)
    return this;
  }

  multiply(number) {
    this.exp.push('*');
    this.exp.push(number)
    return this;
  }

  devide(number) {
    this.exp.push('/');
    this.exp.push(number)
    return this;
  }

  pow(number) {
    this.exp.push('^');
    this.exp.push(number)
    return this;
  }

  valueOf(){
    this.getValue('^');
    this.getValue('*');
    this.getValue('/');
    this.getValue('+');
    this.getValue('-');
    this.result = this.exp[0];
    return parseInt(this.result);
  }
  toString(){
    this.getValue('^');
    this.getValue('*');
    this.getValue('/');
    this.getValue('+');
    this.getValue('-');
    this.result = this.exp.join("");
  }
  getValue(operator){
    var startIndex = 0;
    while(true){
      var mulIndex = this.exp.indexOf(operator, startIndex);
      startIndex = mulIndex + 1;
      
      if (mulIndex !== -1) {
        if (mulIndex === 0) {
          switch(operator){
            case '+':{
              this.exp[mulIndex] = this.value + this.exp[mulIndex + 1];
              break;
            }
            case '-':{
              this.exp[mulIndex] = this.value - this.exp[mulIndex + 1];
              break;
            }
            case '*':{
              this.exp[mulIndex] = this.value * this.exp[mulIndex + 1];
              break;
            }
            case '/':{
              this.exp[mulIndex] = this.value / this.exp[mulIndex + 1];
              break;
            }
            case '^':{
              this.exp[mulIndex] = Math.pow(this.value, this.exp[mulIndex + 1]);
              break;
            }
          }
          this.exp.splice(mulIndex + 1, 1);
        }else{
          switch(operator){
            case '+':{
              this.exp[mulIndex - 1] = this.exp[mulIndex - 1] + this.exp[mulIndex + 1];
              break;
            }
            case '-':{
              this.exp[mulIndex - 1] = this.exp[mulIndex - 1] - this.exp[mulIndex + 1];
              break;
            }
            case '*':{
              this.exp[mulIndex - 1] = this.exp[mulIndex - 1] * this.exp[mulIndex + 1];
              break;
            }
            case '/':{
              this.exp[mulIndex - 1] = this.exp[mulIndex - 1] / this.exp[mulIndex + 1];
              break;
            }
            case '^':{
              this.exp[mulIndex - 1] = Math.pow(this.exp[mulIndex - 1], this.exp[mulIndex + 1]);
              break;
            }
          }
          this.exp.splice(mulIndex + 1, 1);
          this.exp.splice(mulIndex, 1);
        }
      }else{
        return;
      }
    }
  }
}

module.exports = SmartCalculator;
