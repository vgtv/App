import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchService } from './search.component';

describe('SearchService', () => {
  let component: SearchService;
  let fixture: ComponentFixture<SearchService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
