import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { PrimeNgModule } from './external/prime-ng.module';

@NgModule({
  declarations: [],
  imports: [
    PrimeNgModule,
    FormsModule,
  ],
  exports: [PrimeNgModule, FormsModule]
})
export class SharedModule { }
