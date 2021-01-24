import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl , FormGroup , Validators , Validator } from '@angular/forms';

@Component({
    selector: 'app-form' ,
    templateUrl: './form.component.html' ,
    styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit , AfterViewInit {
    comments = new FormGroup({
        user_name : new FormControl('' , [Validators.required]) ,
        user_email : new FormControl('' , [Validators.required]) ,
        user_phone : new FormControl('') ,
        user_comment : new FormControl('' , [Validators.required])
    });


    @ViewChild('btnSubmit') btn: ElementRef;
    button: HTMLElement;

    constructor() {}
    ngOnInit(): void {}
    ngAfterViewInit(): void {
        this.button = this.btn.nativeElement;
    }
    showData(): void {
        this.button.classList.add('waiting');
        setTimeout(() => {
            this.button.classList.remove('waiting');
            if (this.comments.controls.user_name.value === 'Amir') {
                this.button.classList.add('success');
            } else {
                this.button.classList.add('error');
            }
            setTimeout(() => {
                try {
                    this.button.classList.remove('error');
                } catch (e) {}
                try {
                    this.button.classList.remove('success');
                }
                catch (e) {}
            }, 2000);
        } , 2000);
        console.log(`${this.comments.controls.user_name.value}`);
    }
}
