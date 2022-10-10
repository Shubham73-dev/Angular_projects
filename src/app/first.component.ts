import {Component} from '@angular/core';

// decorator
@Component({
    selector:'first',
    templateUrl:'./first.component.html',
    styleUrls:['./first.component.css','./my.component.css']
})

export class FirstComponent{
    name:string = "shubham"
}