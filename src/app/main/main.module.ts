import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// Modules
import { MainRoutingModule } from './main-routing.module';

// Components
import { MainComponent } from './main.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [MainComponent],
    imports: [MainRoutingModule, RouterModule, SharedModule, HttpClientModule, CommonModule],
  exports: [MainComponent]
})
export class MainModule {}
