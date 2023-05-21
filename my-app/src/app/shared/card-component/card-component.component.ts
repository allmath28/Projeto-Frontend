import {Component, Input} from '@angular/core';

@Component({
    selector: 'my-card-component',
    templateUrl: './card-component.component.html',
    styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent {

    @Input()
    header: string = '';
    @Input()
    label: string = '';

}
