import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { TecnicosService } from '../../servicios/tecnicos.service'; // Asegúrate de que el servicio esté importado

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  tecnicos: any[] = []; // Lista de técnicos

  constructor(
    private formBuild: FormBuilder,
    private solicitudFormularioSrv: SolicitudFormularioService,
    private tecnicosService: TecnicosService
  ) {
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }

  ngOnInit() {
    this.obtenerTecnicos();  // Obtener la lista de técnicos al iniciar
  }

  enviarDatos() {
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response: any) => {
        this.datos_formulario = response.solicitud_formulario;
        console.log(this.datos_formulario);
        alert('Datos guardados correctamente');
        this.formularioForm.reset();
      },
      error => {
        console.log(error);
      }
    );
  }

  obtenerTecnicos(): void {
    this.tecnicosService.obtenerTecnicos().subscribe((data) => {
      this.tecnicos = data;
    });
  }
}
