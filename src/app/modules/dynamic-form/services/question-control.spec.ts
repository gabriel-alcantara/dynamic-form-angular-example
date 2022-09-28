import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { QuestionControlService } from './question-control.service';
import { QuestionService } from './question.service';

describe('QuestionControlService', () => {
    let questionControlService: QuestionControlService;
    let questionService: QuestionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [QuestionControlService, QuestionService],
        });
        questionControlService = TestBed.inject(QuestionControlService);
        questionService = TestBed.inject(QuestionService);
    });

    it('should be created', () => {
        expect(questionControlService).toBeTruthy();
    });

    it('should get validators to inputs', () => {
        const mockInputs = questionService.getQuestions();
        const mockFormGroup = questionControlService.toFormGroup(mockInputs);
    });
});
