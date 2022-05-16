import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Modules
import { UsersRoutingModule } from '@main/users/users-routing.module';
import { CommonModule } from '@angular/common';

// Components
import { SharedModule } from '@shared/shared.module';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent],
  imports: [UsersRoutingModule, RouterModule, SharedModule, CommonModule],
  exports: [UsersComponent]
})
export class UsersModule {}
