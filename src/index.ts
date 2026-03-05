export const hello = (link :string ): string =>  {
   let str :string = "";
   link = link.toLocaleLowerCase();
    
   for(let i :number =0  ; i<link.length ; i++){
      if((link[i]<='z' && link[i]>='a') || (link[i]<='9' && link[i]>='0') ){
        str += link[i];
      }
      else if(link[i] === ' '||link[i] === '_'||link[i] === '-'){
        while(i<link.length && (link[i] === ' '||link[i] === '_'||link[i] === '-')) i++;
         str += '-';
        i--;
      }
  }
  let beg :number = 0;
  let end :number = str.length-1 ;
  while(beg < end && !(str[beg] <='z' && str[beg] >='a') && !(str[beg] <='9' && str[beg] >='0')){
    beg++; 
  } 
 while(beg < end && !(str[end] <='z' && str[end] >='a') && !(str[end] <='9' && str[end] >='0')){
    end--;
  }
  str = str.substring(beg,end+1);
  return str;
};