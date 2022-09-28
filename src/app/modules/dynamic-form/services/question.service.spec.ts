import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Field } from '../models/field-model';
import { QuestionService } from './question.service';

describe('QuestionService', () => {
    let questionService: QuestionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [QuestionService],
        });
        questionService = TestBed.inject(QuestionService);
    });

    it('should be created', () => {
        expect(questionService).toBeTruthy();
    });

    it('getQuestions', () => {
        questionService.getQuestions();
    });

    it('adaptToReturnFields', () => {
        const mockFieldLabel: Field = {
            type: 'label',
            tag: 'label',
            enabled: true,
        };
        const mockFieldText: Field = {
            type: 'text',
            enabled: true,
        };
        const mockFieldNumber: Field = {
            type: 'number',
            enabled: true,
        };
        const mockFieldDropdown: Field = {
            type: 'dropdown',
            enabled: true,
        };
        const mockFieldRadio: Field = {
            type: 'radio',
            enabled: true,
            options: ['Sim'],
        };
        const mockFieldCheckbox: Field = {
            type: 'checkbox',
            enabled: true,
        };
        const mockFieldFile: Field = {
            type: 'file',
            enabled: true,
        };

        const mockFields: Field[] = [
            mockFieldLabel,
            mockFieldText,
            mockFieldNumber,
            mockFieldDropdown,
            mockFieldRadio,
            mockFieldCheckbox,
            mockFieldFile,
        ];
        questionService.adaptToReturnFields(mockFields);
    });
});
