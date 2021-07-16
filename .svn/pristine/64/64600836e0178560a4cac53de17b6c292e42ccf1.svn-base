
const validateInput = (val) =>{
    
      var isPoundPresent = false;
      var isSymbolPresent = false;

      //validation of values starts with checking empty string.
      if(val == '')
        return 'Empty String';
         
      //checking if £ symbol is present if yes then checking if it is at start position 
      //if £ symbol present but not at start positing then show error
      if(val.indexOf('£') !== -1 ){
        if(val.includes('£', 0))
        {
          val = val.substring(1,val.length);
          isPoundPresent = true;
          isSymbolPresent= true;
        }
        else
            return 'Enter valid amount';
      }

      //checking if p symbol is present if yes then checking if it is at start position 
      //if p symbol present but not at start positing then show error
      if(val.indexOf('p') != -1)
      {
        if(val.includes('p', val.length-1))
        {
          val = val.substring(0,val.length-1);
          isSymbolPresent= true;
        }
        else
            return 'Enter valid amount';
          
      }

      //after removing the symbols from entered value checking if still it is a valid number 
      //if not then show error according to the conditions if symbol is present then show different error.
      if(isNaN(val))
      {
        if(!isSymbolPresent)
           return 'Non-numeric, non-symbol character';
        else
          return 'Non-numeric, non-symbol character along with valid symbol';
        
      }
      //checking if removing symbols still digits exists if not then show error.
      else if(val == '')
        return 'Missing digits';

      //if index of '.' is greater then 0 that means a digits is present before '.' which means £ is present.
      if(val.indexOf('.') > 0)
        isPoundPresent = true;
      
      //if £ is present then convert values to pennes.
      if(isPoundPresent)
        val = parseFloat(val*100);

    return val;
}

const testSamples = (val) => {
    var currentVal = val;
    val = validateInput(val);

    if(isNaN(val))
    {
        console.log(currentVal +" = "+val);
        return;
    }
      
      
    //defined a hardcoded array of required calculation against values are to be checked.
    var arr = [200,100,50,20,10,5,2,1];

    for (var i=0;i<arr.length;i++)
    {
      //dividing value against each value in array.
      //if response is greater than 0 then add it in table rows and then multiply the response from divide with the array position value minus the actual value.
      //update that to actual value and use that value to iterate other missing array elements.
      var strRes = currentVal+' = ';
      var remainder = parseInt(val/arr[i]);
      if(remainder!="0")
      {
        val = val - (remainder * arr[i]);
        if(arr[i] == 100)
          arr[i] = '₤1';
        else if(arr[i] == 200)
          arr[i] = '₤2';
        else
          arr[i] = arr[i]+'p';

          console.log(strRes + (arr[i] + " X " +remainder +" "));
      } 
    }
}

export {validateInput,testSamples};