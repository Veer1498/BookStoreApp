
export class BookModule { 
   bookName:string="";
   bookAuthor:string="";
   bookDesc:string="";
   bookPrice:Number=0;
   bookQuantity:Number=0;

  constructor(bookName:string,bookAuthor:string,bookDesc:string,bookPrice:Number,bookQuantity:Number){
    this.bookName=bookName;
    this.bookAuthor=bookAuthor;
    this.bookDesc=bookDesc;
    this.bookPrice=bookPrice;
    this.bookQuantity=bookQuantity

  }
}
