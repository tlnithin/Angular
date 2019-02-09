import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
  name: 'ConvertToSpaces'
})
export class ConverToSpacesPipe implements PipeTransform {
  transform(value: string, character: string) {
    return value.replace(character, ' ');
  }
}
