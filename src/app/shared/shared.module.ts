import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';

const exportModule = [SidebarComponent];

@NgModule({
  declarations: [
    exportModule
  ],
  imports: [
    CommonModule
  ],exports:[exportModule]
})
export class SharedModule { }
