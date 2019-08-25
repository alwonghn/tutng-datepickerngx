import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerNgxComponent } from './datepicker-ngx/datepicker-ngx.component';
import { DatepickerNgxInlineComponent } from './datepicker-ngx-inline/datepicker-ngx-inline.component';
import { DatepickerNgxAnimatedComponent } from './datepicker-ngx-animated/datepicker-ngx-animated.component';
import { DatepickerNgxAdaptivepositionComponent } from './datepicker-ngx-adaptiveposition/datepicker-ngx-adaptiveposition.component';
import { DatepickerNgxIsdisabledComponent } from './datepicker-ngx-isdisabled/datepicker-ngx-isdisabled.component';
import { DatepickerNgxExternaltoggleComponent } from './datepicker-ngx-externaltoggle/datepicker-ngx-externaltoggle.component';
import { NgstyleTesterComponent } from './ngstyle-tester/ngstyle-tester.component';
import { DisabledTesterComponent } from './disabled-tester/disabled-tester.component';
import { DisabledInputTesterComponent } from './disabled-input-tester/disabled-input-tester.component';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerNgxComponent,
    DatepickerNgxInlineComponent,
    DatepickerNgxAnimatedComponent,
    DatepickerNgxAdaptivepositionComponent,
    DatepickerNgxIsdisabledComponent,
    DatepickerNgxExternaltoggleComponent,
    NgstyleTesterComponent,
    DisabledTesterComponent,
    DisabledInputTesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
