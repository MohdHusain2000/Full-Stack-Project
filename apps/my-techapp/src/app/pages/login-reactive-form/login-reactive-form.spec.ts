import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginReactiveForm } from './login-reactive-form';

describe('LoginReactiveForm', () => {
  let component: LoginReactiveForm;
  let fixture: ComponentFixture<LoginReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
