import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { SubjectsService } from '../../services/subjects.service';
// Import Models
import { Subjects } from '../../domain/school-management-system_db/subjects';

// START - USED SERVICES
/**
* SubjectsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* SubjectsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Subjects
 * @class SubjectsListComponent
 */
@Component({
    selector: 'app-subjects-list',
    templateUrl: './subjects-list.component.html',
    styleUrls: ['./subjects-list.component.css']
})
export class SubjectsListComponent implements OnInit {
    list: Subjects[];
    search: any = {};
    idSelected: string;
    constructor(
        private subjectsService: SubjectsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.subjectsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Subjects to remove
     *
     * @param {string} id Id of the Subjects to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Subjects
     */
    deleteItem() {
        this.subjectsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
