import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptosListComponent } from './conceptos-list.component';

describe('ConceptosListComponent', () => {
  let component: ConceptosListComponent;
  let fixture: ComponentFixture<ConceptosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptosListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
