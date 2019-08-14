import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UxModule} from "../ux/ux.module";
import {FormComponent} from "./form/form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        FormComponent,
    ],
    exports: [
        FormComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        UxModule,
    ],
    providers: [
    ]
})
export class AppFormsModule {}