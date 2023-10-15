import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustoRegistroComponent } from './components/custo-registro/custo-registro.component';
import { ReceitaRegistroComponent } from './components/receita-registro/receita-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    CustoRegistroComponent,
    ReceitaRegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
