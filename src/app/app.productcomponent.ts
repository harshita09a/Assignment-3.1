import{Component} from '@angular/core';


@Component({
    selector:'add-comp',
    templateUrl:'addProduct.html'
})
export class ProductComponent{
   proId:number;
   proName:string;
   proCost:number;
   proOnline:string;
   proCategory:string;
   proStore:string;
   proStore1:boolean;
   proStore2:boolean;
   proStore3:boolean;
   proStore4:boolean;
  
    proAll:any[];
    
   addProduct():any{
    this.proAll.push({proId:this.proId,proName:this.proName,proCost:this.proCost,proOnline:this.proOnline,proCategory:this.proCategory,proStore:this.proStore})
      console.log("Employee Added...."+this.proAll);//dom to component
      this.proCost=null;
      this.proCategory=null;
      this.proId=null;
      this.proName=null;
      this.proOnline=null;
      this.proStore=null;
  }
    

    
      }
    