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
 *  TO CUSTOMIZE ExamResultsControllerGenerated.js PLEASE EDIT ../ExamResultsController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ExamResultsModel from "../../../models/SchoolManagementSystem_db/ExamResultsModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ExamResultsController from "../ExamResultsController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/examresults`;
    router.post(baseUrl + "", authorize([]), ExamResultsController.create);
    router.delete(baseUrl + "/:id", authorize([]), ExamResultsController.delete);
    router.get(baseUrl + "/findBy_Student/:key", authorize([]), ExamResultsController.findBy_Student);
    router.get(baseUrl + "/findBy_Subjects/:key", authorize([]), ExamResultsController.findBy_Subjects);
    router.get(baseUrl + "/:id", authorize([]), ExamResultsController.get);
    router.get(baseUrl + "", authorize([]), ExamResultsController.list);
    router.post(baseUrl + "/:id", authorize([]), ExamResultsController.update);
  },


  // CRUD METHODS


  /**
  * ExamResultsModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ExamResultsModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ExamResultsModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ExamResultsModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ExamResultsModel.findBy_Student
  *   @description CRUD ACTION findBy_Student
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_Student: async (req, res) => {
    try {
      const result = await ExamResultsModel.findBy_Student(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ExamResultsModel.findBy_Subjects
  *   @description CRUD ACTION findBy_Subjects
  *   @param Objectid key Id of model to search for
  *
  */
  findBy_Subjects: async (req, res) => {
    try {
      const result = await ExamResultsModel.findBy_Subjects(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ExamResultsModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await ExamResultsModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ExamResultsModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ExamResultsModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ExamResultsModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ExamResultsModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
