import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { MdSelectModule } from '@angular/material';
import { MdInputModule, MdButtonModule } from '@angular/material';
import { MdToolbarModule } from '@angular/material';
import { AlgoService } from './shared/algo.service';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ 
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        MdButtonModule,
        MdSelectModule,
        MdInputModule,
        MdToolbarModule
      ],
      declarations: [
        AppComponent,
        NavBarComponent
      ],
      providers: [ AlgoService ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Assigment-app!');
  }));
});
