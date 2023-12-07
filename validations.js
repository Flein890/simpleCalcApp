export const displayResult = (e) =>{
  console.log(result.value)
  if(e.target.value === '='){
      //eval es una función de javascript que calcula el resultado de una cadena de texto de forma dinámica
      // y devuelve el resultado como un valor numérico o una cadena de texto dinámica. 
      result.value = eval(result.value);
      return
  }
}
export const clearInput = (e) =>{
  if(e.target.value === 'clear'){
      result.value = '';
  }
}