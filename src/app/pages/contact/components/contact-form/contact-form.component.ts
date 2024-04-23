import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
})
export class ContactFormComponent {
  form = new FormGroup({
    name: new FormControl(null as string | null, Validators.required),
    email: new FormControl(null as string | null, [
      Validators.required,
      Validators.email,
    ]),
    message: new FormControl(null as string | null, Validators.required),
  });
}
