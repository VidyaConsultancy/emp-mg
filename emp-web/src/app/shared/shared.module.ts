import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    LayoutComponent,
    FooterComponent,
    TopbarComponent,
    SidebarComponent,
    HighlightDirective,
    UnlessDirective,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
  ],
  providers: [],
  exports: [LayoutComponent, HighlightDirective, UnlessDirective],
})
export class SharedModule {}
