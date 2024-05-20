import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder
  ) { }
  login!: FormGroup;
  ngOnInit(): void {
    this.login = this.formBuilder.group(
      {
        username: ['', Validators.required],
        userPass: ['', Validators.required]
      }

    )

  }


}
