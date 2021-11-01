import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase20';
  nombre: string= 'matias';
  usuarios: Array<{id: number, username: string, edad: number}> = [
    {
      id: 1,
      username: 'leomessi',
      edad: 34
    },
    {
      id: 2,
      username: 'bobesponja',
      edad: 15
    },
    {
      id: 3,
      username: 'matias',
      edad: 46
    }

  ];
  usuarioBuscar: string = '';

  usuariosMostrar: Array<{id: number, username: string, edad: number}> = this.usuarios;

  contador: number=0;
  handlerInput(e: any){
  //  console.log(e.target);
    this.usuarioBuscar = e.target.value;
  //  console.log(this.usuarioBuscar);
  }
  //submitButton(){
  //  this.contador++;
  //  console.log('aprete el boton')
  //}
  submitButton(){
    console.log("apretaste el boton de busqueda");
    this.usuariosMostrar = this.usuarios.filter((e) => e.username.includes(this.usuarioBuscar))  
    console.log(this.usuarioBuscar)      
  }
 
}
