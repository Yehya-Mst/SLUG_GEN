export const slugify = (text : string) : string =>  {
  if(typeof text !== "string") {  
    throw new Error("Input must be a string");  
  }
  return text
            .trim()
            .toLocaleLowerCase()
            .replace(/[^a-z0-9\s]/g,"-")
            .replace(/\s/g,"-")
            .replace(/-+/g,"-")
            .replace(/^-|-$/g,"");
};
