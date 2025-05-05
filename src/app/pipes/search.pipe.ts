import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(recipeArray:any[],searchKey:string): any[] {

    let result:any=[]

    if(!recipeArray||searchKey==""){
      return recipeArray;
    }

    result=recipeArray.filter((each:any)=>each.name.toLowerCase().includes(searchKey.toLowerCase()))


    return result;
  }

}
