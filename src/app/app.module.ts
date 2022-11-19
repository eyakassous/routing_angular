import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { SelectedLivreComponent } from './components/selected-livre/selected-livre.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ErrorComponent } from './components/error/error.component';
import { ListlivresComponent } from './components/listlivres/listlivres.component';
import { TestamineComponent } from './testamine/testamine.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PresentationComponent,
    SelectedLivreComponent,
    AboutusComponent,
    ErrorComponent,
    ListlivresComponent,
    TestamineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
