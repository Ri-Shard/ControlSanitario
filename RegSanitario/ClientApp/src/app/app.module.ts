import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './perfil/restaurante/restaurante.component';
import { ManipuladorComponent } from './perfil/manipulador/manipulador.component';
import { RegistroComponent } from './perfil/registro/registro.component';
import { ConsultaComponent } from './perfil/consulta/consulta.component';
import { InformateComponent } from './perfil/informate/informate.component';
import { NormatividadComponent } from './info/normatividad/normatividad.component';
import { FooterComponent } from './component/footer/footer.component';
import { FiltroPipe } from './pipe/filtro.pipe';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { LoginComponent } from './component/login/login.component';
import { GestionComponent } from './perfil/gestion/gestion.component';
import { ModificarComponent } from './gestiones/modificar/modificar.component';
import { ConsultarComponent } from './gestiones/consultar/consultar.component';
import { MasComponent } from './gestiones/mas/mas.component';
import { EvaluacionComponent } from './perfil/evaluacion/evaluacion.component';
import { routes } from './app.routes';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegUsuarioComponent } from './components/reg-usuario/reg-usuario.component';

@NgModule({
   declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    RestauranteComponent,
    ManipuladorComponent,
    RegistroComponent,
    ConsultaComponent,
    InformateComponent,
    NormatividadComponent,
    FooterComponent,
    FiltroPipe,
    AlertModalComponent,
    LoginComponent,
    GestionComponent,
    ModificarComponent,
    ConsultarComponent,
    MasComponent,
    EvaluacionComponent,
    RegUsuarioComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  entryComponents: [AlertModalComponent],
  providers: [
    AngularFireAuth
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
