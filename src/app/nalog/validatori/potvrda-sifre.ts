import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors, Validator } from "@angular/forms";

@Injectable({
    providedIn:"root"
})
export class PotvrdaSifre implements Validator {
    validate(control: AbstractControl<any, any>): ValidationErrors | null {
        let {password,passwordConfirmation} = control.value;
        if(password === passwordConfirmation){
            return null;
        }
        return {
            passwordsDontMatch: true
        }
    }
}
