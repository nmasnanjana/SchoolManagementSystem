// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { StudentService } from '../../services/student.service';
import { ExamResultsService } from '../../services/exam-results.service';
import { SubjectsService } from '../../services/subjects.service';
// Import Models
import { Student } from '../../domain/school-management-system_db/student';
import { ExamResults } from '../../domain/school-management-system_db/exam-results';
import { Subjects } from '../../domain/school-management-system_db/subjects';

// START - USED SERVICES
/**
* StudentService.create
*	@description CRUD ACTION create
*
* StudentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* StudentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ExamResultsService.findBy_Student
*	@description CRUD ACTION findBy_Student
*	@param Objectid key Id of model to search for
*
* SubjectsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Student
 */
@Component({
    selector: 'app-student-edit',
    templateUrl: 'student-edit.component.html',
    styleUrls: ['student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
    item: Student;
    list_Subjects: Subjects[];
    externalExamResults__Student: ExamResults[];
    model: Student;
    formValid: Boolean;

    constructor(
    private studentService: StudentService,
    private examresultsService: ExamResultsService,
    private subjectsService: SubjectsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Student();
        this.externalExamResults__Student = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.studentService.get(id).subscribe(item => this.item = item);
                this.examresultsService.findBy_Student(id).subscribe(list => this.externalExamResults__Student = list);
            }
            // Get relations
            this.subjectsService.list().subscribe(list => this.list_Subjects = list);
        });
    }

    /**
     * Check if an Subjects is in  _Subjects
     *
     * @param {string} id Id of Subjects to search
     * @returns {boolean} True if it is found
     */
    containSubjects(id: string): boolean {
        if (!this.item._Subjects) return false;
        return this.item._Subjects.indexOf(id) !== -1;
    }

    /**
     * Add Subjects from Student
     *
     * @param {string} id Id of Subjects to add in this.item._Subjects array
     */
    addSubjects(id: string) {
        if (!this.item._Subjects)
            this.item._Subjects = [];
        this.item._Subjects.push(id);
    }

    /**
     * Remove an Subjects from a Student
     *
     * @param {number} index Index of Subjects in this.item._Subjects array
     */
    removeSubjects(index: number) {
        this.item._Subjects.splice(index, 1);
    }

    /**
     * Save Student
     *
     * @param {boolean} formValid Form validity check
     * @param Student item Student to save
     */
    save(formValid: boolean, item: Student): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.studentService.update(item).subscribe(data => this.goBack());
            } else {
                this.studentService.create(item).subscribe(data => this.goBack());
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



