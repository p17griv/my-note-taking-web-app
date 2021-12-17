import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnoteComponent } from './newnote.component';

describe('NewnoteComponent', () => {
  let component: NewnoteComponent;
  let fixture: ComponentFixture<NewnoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewnoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
