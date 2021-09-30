import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Panel de Control  in li.menu-admin-dashboard  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    //expect(compiled.querySelector('h1').textContent).toContain('Welcome to email-module!');      
    expect(compiled.querySelector('#menu-admin-dashboard').textContent).toContain('Panel de Control');

    //menu - admin - dashboard
  });

  it('should render Mi Cuenta  in li.menu-my-account  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu-my-account').textContent).toContain('Mi Cuenta');
  });


  it('should render  Instituticiones  in li.menu-admin-institution tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('#menu-admin-institution').textContent).toContain('Instituciones');
  });


  it('should render Usuarios in li.menu-admin-user  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu-admin-user').textContent).toContain('Usuarios');
  });

  it('should render  Cambiar contraseña in li.menu-change-password  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu-change-password').textContent).toContain('Cambiar contraseña');
  });

  it('should render  Cambiar Correo in li.menu-change-email  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu-change-email').textContent).toContain('Cambiar Correo');
  });
 
  it('should render  Soporte  in li.menu-change-email  tag', () => {
    const fixture = TestBed.createComponent(MainComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu-support').textContent).toContain('Soporte');
  });
  



});
