import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedRecipeComponentComponent } from './saved-recipe-component.component';

describe('SavedRecipeComponentComponent', () => {
  let component: SavedRecipeComponentComponent;
  let fixture: ComponentFixture<SavedRecipeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavedRecipeComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavedRecipeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
