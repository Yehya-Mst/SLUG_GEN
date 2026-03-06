export const slugify = (text :string ): string =>  {
  return text
            .trim()
            .toLocaleLowerCase()
            .replace(/[^a-z0-9\s]/g,"-")
            .replace(/\s/g,"-")
            .replace(/-+/g,"-")
            .replace(/^-|-$/g,"");
};
