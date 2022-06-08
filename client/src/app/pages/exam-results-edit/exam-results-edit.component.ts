// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ExamResultsService } from '../../services/exam-results.service';
import { SubjectsService } from '../../services/subjects.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { ExamResults } from '../../domain/school-management-system_db/exam-results';
import { Student } from '../../domain/school-management-system_db/student';
import { Subjects } from '../../domain/school-management-system_db/subjects';

// START - USED SERVICES
/**
* ExamResultsService.create
*	@description CRUD ACTION create
*
* ExamResultsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* ExamResultsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SubjectsService.list
*	@description CRUD ACTION list
*
* StudentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ExamResults
 */
@Component({
    selector: 'app-exam-results-edit',
    templateUrl: 'exam-results-edit.component.html',
    styleUrls: ['exam-results-edit.component.css']
})
export class ExamResultsEditComponent implements OnInit {
    item: ExamResults;
    list_Student: Student[];
    list_Subjects: Subjects[];
    model: ExamResults;
    formValid: Boolean;

    constructor(
    private examresultsService: ExamResultsService,
    private subjectsService: SubjectsService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ExamResults();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.examresultsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.studentService.list().subscribe(list => this.list_Student = list);
            this.subjectsService.list().subscribe(list => this.list_Subjects = list);
        });
    }


    /**
     * Save ExamResults
     *
     * @param {boolean} formValid Form validity check
     * @param ExamResults item ExamResults to save
     */
    save(formValid: boolean, item: ExamResults): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.examresultsService.update(item).subscribe(data => this.goBack());
            } else {
                this.examresultsService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



