// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TeacherService } from '../../services/teacher.service';
import { SubjectsService } from '../../services/subjects.service';
// Import Models
import { Teacher } from '../../domain/school-management-system_db/teacher';
import { Subjects } from '../../domain/school-management-system_db/subjects';

// START - USED SERVICES
/**
* TeacherService.create
*	@description CRUD ACTION create
*
* TeacherService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* TeacherService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SubjectsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Teacher
 */
@Component({
    selector: 'app-teacher-edit',
    templateUrl: 'teacher-edit.component.html',
    styleUrls: ['teacher-edit.component.css']
})
export class TeacherEditComponent implements OnInit {
    item: Teacher;
    list_Subjects: Subjects[];
    model: Teacher;
    formValid: Boolean;

    constructor(
    private teacherService: TeacherService,
    private subjectsService: SubjectsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Teacher();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.teacherService.get(id).subscribe(item => this.item = item);
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
     * Add Subjects from Teacher
     *
     * @param {string} id Id of Subjects to add in this.item._Subjects array
     */
    addSubjects(id: string) {
        if (!this.item._Subjects)
            this.item._Subjects = [];
        this.item._Subjects.push(id);
    }

    /**
     * Remove an Subjects from a Teacher
     *
     * @param {number} index Index of Subjects in this.item._Subjects array
     */
    removeSubjects(index: number) {
        this.item._Subjects.splice(index, 1);
    }

    /**
     * Save Teacher
     *
     * @param {boolean} formValid Form validity check
     * @param Teacher item Teacher to save
     */
    save(formValid: boolean, item: Teacher): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.teacherService.update(item).subscribe(data => this.goBack());
            } else {
                this.teacherService.create(item).subscribe(data => this.goBack());
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



