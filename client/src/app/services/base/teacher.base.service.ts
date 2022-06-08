/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE teacherBaseService PLEASE EDIT ../teacher.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Teacher } from '../../domain/school-management-system_db/teacher';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Teacher.service.ts
 */

/*
 * SCHEMA DB Teacher
 *
	{
		DateofBirth: {
			type: 'Date',
			required : true
		},
		EnterDate: {
			type: 'Date',
			required : true
		},
		FirstName: {
			type: 'String',
			required : true
		},
		LastName: {
			type: 'String',
			required : true
		},
		LastWorkPlace: {
			type: 'String'
		},
		ServiceTime: {
			type: 'Integer',
			required : true
		},
		Subject: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		_Subjects: [{
			type: Schema.ObjectId,
			ref : "Teacher"
		}],
	}
 *
 */
@Injectable()
export class TeacherBaseService {

    contextUrl: string = environment.endpoint + '/teascher';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * TeacherService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Teacher): Observable<Teacher> {
        return this.http
            .post<Teacher>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * TeacherService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TeacherService.findBy_Subjects
    *   @description CRUD ACTION findBy_Subjects
    *   @param Objectid key Id of model to search for
    *
    */
    findBy_Subjects(id: string): Observable<Teacher[]> {
        return this.http
            .get<Teacher[]>(this.contextUrl + '/findBy_Subjects/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * TeacherService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Teacher> {
        return this.http
            .get<Teacher>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * TeacherService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Teacher[]> {
        return this.http
            .get<Teacher[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * TeacherService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Teacher): Observable<Teacher> {
        return this.http
            .post<Teacher>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}