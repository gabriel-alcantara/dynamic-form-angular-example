import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormBuilderComponent } from './dynamic-form-builder.component';

describe('DynamicFormBuilderComponent', () => {
    let component: DynamicFormBuilderComponent;
    let fixture: ComponentFixture<DynamicFormBuilderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DynamicFormBuilderComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DynamicFormBuilderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('getMask default or nothing', () => {
        component.getMask('');
        component.getMask(null);
    });

    it('getMask custom', () => {
        component.getMask('cpf');
        component.getMask('cnpj');
        component.getMask('phone');
        component.getMask('cep');
        component.getMask('chassi');
        component.getMask('placaVeiculo');
    });
});
