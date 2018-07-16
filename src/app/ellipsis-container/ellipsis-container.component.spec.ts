import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EllipsisContainerComponent } from './ellipsis-container.component';

describe('EllipsisContainerComponent', () => {
  let component: EllipsisContainerComponent;
  let fixture: ComponentFixture<EllipsisContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EllipsisContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EllipsisContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
