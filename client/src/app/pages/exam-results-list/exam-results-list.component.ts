import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ExamResultsService } from '../../services/exam-results.service';
// Import Models
import { ExamResults } from '../../domain/school-management-system_db/exam-results';

// START - USED SERVICES
/**
* ExamResultsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ExamResultsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ExamResults
 * @class ExamResultsListComponent
 */
@Component({
    selector: 'app-exam-results-list',
    templateUrl: './exam-results-list.component.html',
    styleUrls: ['./exam-results-list.component.css']
})
export class ExamResultsListComponent implements OnInit {
    list: ExamResults[];
    search: any = {};
    idSelected: string;
    constructor(
        private examresultsService: ExamResultsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.examresultsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ExamResults to remove
     *
     * @param {string} id Id of the ExamResults to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ExamResults
     */
    deleteItem() {
        this.examresultsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
