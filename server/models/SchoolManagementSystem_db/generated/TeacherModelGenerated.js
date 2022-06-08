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
 *  TO CUSTOMIZE TeacherModelGenerated.js PLEASE EDIT ../TeacherModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_SchoolManagementSystem_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Teacher
      */
    const teacherSchema = new mongoose.Schema({
      DateofBirth: {
        type: "Date", 
        required: true
      },
      EnterDate: {
        type: "Date", 
        required: true
      },
      FirstName: {
        type: "String", 
        required: true
      },
      LastName: {
        type: "String", 
        required: true
      },
      LastWorkPlace: {
        type: "String"
      },
      ServiceTime: {
        type: "Number", 
        required: true
      },
      Subject: {
        type: "String", 
        required: true
      },
      // RELATIONS
      _Subjects: [{
        type: Schema.ObjectId,
        ref: "Subjects"
      }],
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Teacher", teacherSchema));

    return teacherSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * TeacherModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TeacherModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * TeacherModel.findBy_Subjects
  *   @description CRUD ACTION findBy_Subjects
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_Subjects(key) {
    return await generatedModel.model.find({ '_Subjects' : key});
  },
  
  /**
  * TeacherModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * TeacherModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * TeacherModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;