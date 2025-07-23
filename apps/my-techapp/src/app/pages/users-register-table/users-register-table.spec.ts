import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersRegisterTable } from './users-register-table';

describe('UsersRegisterTable', () => {
  let component: UsersRegisterTable;
  let fixture: ComponentFixture<UsersRegisterTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersRegisterTable],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersRegisterTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
