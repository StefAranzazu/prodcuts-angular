import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/models/producto';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  productoForm: FormGroup;
  

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _productoService: ProductoService ) {
    this.productoForm = this.fb.group({
      producto: ['', Validators.required],
      categoria: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],

    })
  }

  ngOnInit(): void {
  }
  agregarProducto() {
    
    const PRODUCTO: Producto = {
      nombre: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,


    }

    console.log(PRODUCTO)
    this._productoService.guardarProducto(PRODUCTO).subscribe(data =>{
      this.toastr.success('El prodicto fue registrado con exito!', 'Producto reistrado!');
      this.router.navigate(['/']);
    }, error =>{
      console.log(error);
      this.productoForm.reset() 
    })

    this.toastr.success('Producto agregado', 'El Producto fue agregado con exito');
    this.router.navigate(['/'])

  }
}
