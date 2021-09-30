import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, Renderer2, ViewChild, ViewChildren, OnDestroy, ChangeDetectorRef, HostListener, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ApiService } from '../services/api.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';

import Hammer from 'hammerjs';


export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],

})
export class MainComponent implements OnInit, OnDestroy, AfterViewInit {



  url = environment.url
  loading = false

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });


  constructor(private api: ApiService, private fb: FormBuilder) {
    const urlParams = new URLSearchParams(window.location.search);

  }

  ngOnDestroy() {

  }



  ngOnInit() {



  }

  ngAfterViewInit(): void {

  }

  get f() { return this.loginForm.controls; }

  onSubmit() {

  }

}
