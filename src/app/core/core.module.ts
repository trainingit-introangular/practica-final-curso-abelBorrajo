import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent, NotFoundComponent],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [LayoutComponent]
})
export class CoreModule { }
