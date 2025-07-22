import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterReactiveForm } from './register-reactive-form';

describe('RegisterReactiveForm', () => {
  let component: RegisterReactiveForm;
  let fixture: ComponentFixture<RegisterReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterReactiveForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
