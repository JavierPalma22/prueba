import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InicioComponent } from '/inicio.component';

describe('InicioComponent', () => {
  let component: InicioComponent;
  let fixture: ComponentFixture<InicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call openDetailModal on button click', () => {
    spyOn(component, 'openDetailModal'); // Espiar el método
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click(); // Simular clic en el botón
    expect(component.openDetailModal).toHaveBeenCalled(); // Verificar si el método fue llamado
  });
});
