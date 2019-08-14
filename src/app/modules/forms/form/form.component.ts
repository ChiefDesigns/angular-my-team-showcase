import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-form',
    styleUrls: ['./form.component.scss'],
    templateUrl: './form.component.html'
})
export class FormComponent {
    @Input()
    public config: any;

    public ngOnInit(): void {
        console.log(this.config);
    }

    public onSave(e: any): void {

        // this.config.actions.save();
    }
}