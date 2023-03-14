import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private readonly fb: FormBuilder,private persona:PersonaService) { }
  DatosContacto:any;
  DatosCargados:number = 0;
  ngOnInit(): void {
    this.contactForm = this.initForm();
    this.datosContacto();
  }

  onSubmit(): void {
    //console.log(this.contactForm.value);
  }

  initForm(): FormGroup {
    return this.fb.group({
      name: ['',[Validators.required, Validators.minLength(3)]],
      email: ['',[Validators.required, Validators.minLength(3),Validators.email]],
      reason: ['',[Validators.required, Validators.minLength(5),Validators.maxLength(200)]],
      message: ['',[Validators.required, Validators.minLength(20),Validators.maxLength(500)]],
    })
  }

  private datosContacto(){
    this.persona.obtenerDatosPersona().subscribe(data => {
      this.DatosContacto = data[0];
      this.DatosCargados = 1;
    });
  }

}
