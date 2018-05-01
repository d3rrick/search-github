import { Pipe, PipeTransform, Injectable  } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
@Injectable()
export class FilterPipe implements PipeTransform{

  transform(items: any, term: string): any {
    if (!term || !items) return items;

    return FilterPipe.filter(items, term);
  }

  static filter(items: Array<{ [key: string]: any }>, term: string): Array<{ [key: string]: any }> {

    const toCompare = term.toLowerCase();


    // this.resp = this.profileservice.searchRepo(this.repoName);

    // for(let i=0;i<this.resp.length;i++){
    //   var a = this.resp[i];

    //   if(a.toUpperCase().indexOf(this.repoName.toUpperCase()) > -1){

    //     }else{
    //     }
    //   }
 
  


    return items.filter(function (item: any) {
      for (let property in item) {
        if (item[property] === null) {
          continue;
        }
        if (item[property].toString().toLowerCase().includes(toCompare)) {
          return true;
        }
      }
      return false;
    });
  }
}
