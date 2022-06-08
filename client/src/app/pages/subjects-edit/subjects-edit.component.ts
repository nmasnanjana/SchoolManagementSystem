// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { SubjectsService } from '../../services/subjects.service';
import { ExamResultsService } from '../../services/exam-results.service';
import { TeacherService } from '../../services/teacher.service';
import { StudentService } from '../../services/student.service';
// Import Models
import { Subjects } from '../../domain/school-management-system_db/subjects';
import { ExamResults } from '../../domain/school-management-system_db/exam-results';
import { Student } from '../../domain/school-management-system_db/student';
import { Teacher } from '../../domain/school-management-system_db/teacher';

// START - USED SERVICES
/**
* SubjectsService.create
*	@description CRUD ACTION create
*
* SubjectsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* SubjectsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamResultsService.findBy_Subjects
*	@description CRUD ACTION findBy_Subjects
*	@param Objectid key Id of model to search for
*
* TeacherService.findBy_Subjects
*	@description CRUD ACTION findBy_Subjects
*	@param Objectid key Id of model to search for
*
* StudentService.findBy_Subjects
*	@description CRUD ACTION findBy_Subjects
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Subjects
 */
@Component({
    selector: 'app-subjects-edit',
    templateUrl: 'subjects-edit.component.html',
    styleUrls: ['subjects-edit.component.css']
})
export class SubjectsEditComponent implements OnInit {
    item: Subjects;
    externalExamResults__Subjects: ExamResults[];
    externalStudent__Subjects: Student[];
    externalTeacher__Subjects: Teacher[];
    model: Subjects;
    formValid: Boolean;

    constructor(
    private subjectsService: SubjectsService,
    private examresultsService: ExamResultsService,
    private teacherService: TeacherService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Subjects();
        this.externalExamResults__Subjects = [];
        this.externalStudent__Subjects = [];
        this.externalTeacher__Subjects = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.subjectsService.get(id).subscribe(item => this.item = item);
                this.examresultsService.findBy_Subjects(id).subscribe(list => this.externalExamResults__Subjects = list);
                this.studentService.findBy_Subjects(id).subscribe(list => this.externalStudent__Subjects = list);
                this.teacherService.findBy_Subjects(id).subscribe(list => this.externalTeacher__Subjects = list);
            }
            // Get relations
        });
    }


    /**
     * Save Subjects
     *
     * @param {boolean} formValid Form validity check
     * @param Subjects item Subjects to save
     */
    save(formValid: boolean, item: Subjects): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.subjectsService.update(item).subscribe(data => this.goBack());
            } else {
                this.subjectsService.create(item).subscribe(data => this.goBack());
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



