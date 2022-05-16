import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
// Components
import { SharedModule } from '@shared/shared.module';
import { FilesComponent } from './files.component';
import { FilesRoutingModule } from '@main/files/files-routing.module';

@NgModule({
  declarations: [FilesComponent],
  imports: [FilesRoutingModule, RouterModule, SharedModule, CommonModule],
  exports: [FilesComponent]
})
export class FilesModule {}
