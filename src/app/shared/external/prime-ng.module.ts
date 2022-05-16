import { NgModule } from '@angular/core';

import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    DropdownModule,
    MenubarModule,
    InputTextModule,
    TableModule
  ],
  exports: [
    DropdownModule,
    MenubarModule,
    InputTextModule,
    TableModule,
  ]
})
export class PrimeNgModule { }
