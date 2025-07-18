import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StandardUiHomepage } from './standard-ui-homepage';

describe('StandardUiHomepage', () => {
  let component: StandardUiHomepage;
  let fixture: ComponentFixture<StandardUiHomepage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandardUiHomepage],
    }).compileComponents();

    fixture = TestBed.createComponent(StandardUiHomepage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
