import { Directive, ViewContainerRef }from '@angular/core'

@Directive({
    selector: '[appContainer]'
})
export class ViewContainer{
    constructor(public viewContainer: ViewContainerRef){

    }
}