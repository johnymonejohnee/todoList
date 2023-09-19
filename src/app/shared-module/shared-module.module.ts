import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModuleRoutingModule } from './shared-module-routing.module';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

@NgModule({
  declarations: [
    ImageViewerComponent
  ],
  imports: [
    CommonModule,
    SharedModuleRoutingModule
  ],
  exports:[
    ImageViewerComponent
  ]
})
export class SharedModuleModule { }
