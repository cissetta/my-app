import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudprodutosComponent } from './crudprodutos.component';

describe('CrudprodutosComponent', () => {
  let component: CrudprodutosComponent;
  let fixture: ComponentFixture<CrudprodutosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudprodutosComponent]
    });
    fixture = TestBed.createComponent(CrudprodutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
