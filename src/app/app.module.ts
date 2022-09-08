// Angular Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Custom Modules
import { MaterialModule } from './modules/material.module';
import { NgCircleProgressModule } from 'ng-circle-progress';

//Angular Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { GoalsViewComponent } from './components/goals-view/goals-view.component';
import { GoalsCreateComponent } from './components/goals-create/goals-create.component';
import { GoalsEditComponent } from './components/goals-edit/goals-edit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GoalsDetailsComponent } from './components/goals-details/goals-details.component';
import { HttpInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    GoalsViewComponent,
    GoalsCreateComponent,
    NavbarComponent,
    GoalsEditComponent,
    GoalsDetailsComponent,
  ],
  entryComponents: [GoalsEditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
