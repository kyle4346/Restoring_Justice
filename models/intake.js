const uuid = require('uuid');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating a schema

const EventsSchema = new Schema({

    
  Case_ID: {
    type:String,
      require:true,
  },
     Client:{
        type:String,
        require:true,
        
    },
    Start_Date:{
        type:String,
         require:true
    },
    Close_Date:{
        type:Date,
        required: true,

    },
    Last_Name: {
      type:String,
        require:true,
    },
    Middle_Name: {
      type: String,
    },
    Birth_Date: {
      type:String,
        require:true,
    },
    SS_num: {
      type:String,
    },
    US_Citizen_Yes_or_No: {
      type:String,
        require:true,
    },
    Gender_Male_or_Female: {
      type:String,
        require:true,
    },
    TX_ID_or_Drivers_Licens: {
      type:String,
    },
    Address: {
      type:String,
        require:true,
    },
    City: {
      type:String,
        require:true,
    },
    Zip_Code: {
      type:String,
        require:true,
    },
    County: {
      type:String,
        require:true,
    },
    Height_Weight: {
      type:String,
        require:true,
    },
    In_Custody_Y_N: {
      type:String,
        require:true,
    },
    If_Yes_Location: {
      type:String,
        require:true,
    },
    Adelphoi_Y_N_Name: {
      type:String,
        require:true,
    },
    Total_Rent: {
      type:String,
        require:true,
    },
    Utilities_Included: {
      type:String,
        require:true,
    },
    Is_your_rent_subzidized: {
      type:String,
        require:true,
    },
    Are_you_a_single_parent: {
      type:String,
        require:true,
    },
    Home_ph: {
      type:String,
        require:true,
    },
    Work: {
      type:String,
        require:true,
    },
    Cell: {
      type:String,
        require:true,
    },
    Other: {
      type:String,
    },
    Personal_Email: {
      type:String,
        require:true,
    },
    Other_Email: {
      type:String,
    },
    Marital_Status_Single_Married_Seperated_Divorced_Widow_Common_Law: {
      type:String,
        require:true,
    },
    Language_Spanish_English_Bilingual: {
      type:String,
        require:true,
    },
    Ethnicity_Hispanic_Latino_AfricanAmerican_White_Non_Hispanic_Asian: {
      type:String,
        require:true,
    },
    Employed: {
      type:String,
        require:true,
    },
    Employer: {
      type:String,
        require:true,
    },
    Occupation: {
      type:String,
        require:true,
    },
    Unemployed_How_Long: {
      type:String,
    },
    Retired_How_Long: {
      type:String,
        require:true,
    },
    HouseWife: {
      type:String,
        require:true,
    },
    Have_you_attended_school_YES_NO_School: {
      type:String,
        require:true,
    },
    Last_Grade: {
      type:String,
        require:true,
    },
    Graduated_Yes_No_Elementary_HighSchool_GED_Attended_College_Technical_School_AssociatesDegree_BachelorDegree_MasterDegree_PHD: {
      type:String,
        require:true,
    },
    Are_you_head_of_household_Yes_No_Monthley_Income: {
      type:String,
        require:true,
    },
    Other_Income: {
      type:String,
        require:true,
    },
    Spousal_Support: {
      type:String,
        require:true,
    },
    Worker_Comp: {
      type:String,
        require:true,
    },
    Child_Support: {
      type:String,

    },
    TANF: {
      type:String,

    },
    SSI: {
      type:String,
        require:true,
    },
    Unemployment: {
      type:String,
        require:true,
    },
    Social_Security: {
      type:String,
        require:true,
    },
    Others: {
      type:String,
        require:true,
    },
    Do_you_need_clothing,_personal_care_items,_transportation_assistance: {
      type:String,
        require:true,
    },
    Private_Insurance_Medicaid_Medicare_Chip_Gold_Card_WIC: {
      type:String,
        require:true,
    },
    Do_you_recive_Food_Stamps_Y_N: {
      type:String,
        require:true,
    },
    If_yes,_how_much: {
      type:String,
        require:true,
    },
    If_no,_why_not_Do_not_qualify_Have_not_Applied_Application_in_Process_Need_Help_Applying: {
      type:String,
        require:true,
    },
    Do_you_use_drugs_or_alcohol_Y_N: {
      type:String,
        require:true,
    },
    If_yes,what_and_how_much: {
      type:String,
        require:true,
    },
    Do_you_want_Treatment_Y_N: {
      type:String,
        require:true,
    },
    Treatment_History: {
      type:String,
        require:true,
    },
    Case_num: {
      type:String,
        require:true,
    },
    Mental_Competency_Y_N: {
      type:String,
        require:true,
    },
    File_Date: {
      type:String,
        require:true,
    },
    Prior_Attorney_Name: {
      type:String,
        require:true,
    },
    Prior_Attorney_Caseload: {
      type:String,
        require:true,
    },
    Charge_1: {
      type:String,
        require:true,
    },
    Degree_1: {
      type:String,
        require:true,
    },
    Punishment_Range_1: {
      type:String,
        require:true,
    },
    Disposition_1: {
      type:String,
        require:true,
    },
    Charge_2: {
      type:String,
        require:true,
    },
    Degree_2: {
      type:String,
        require:true,
    },
    Punishment_Range_2: {
      type:String,
        require:true,
    },
    Disposition_2: {
      type:String,
        require:true,
    },
    Charge_3: {
      type:String,
        require:true,
    },
    Degree_3: {
      type:String,
        require:true,
    },
    Punishment_Range_3: {
      type:String,
        require:true,
    },
    Disposition_3: {
      type:String,
        require:true,
    },
    Charge_4: {
      type:String,
        require:true,
    },
    Degree_4: {
      type:String,
        require:true,
    },
    Punishment_Range_4: {
      type:String,
        require:true,
    },
    Disposition_4: {
      type:String,
        require:true,
    },
    Charge_5: {
      type:String,
        require:true,
    },
    Degree_5: {
      type:String,
        require:true,
    },
    Punishment_Range_5: {
      type:String,
        require:true,
    },
    Disposition_5: {
      type:String,
        require:true,
    },
    Current_Court: {
      type:String,
        require:true,
    },
    Court_Address: {
      type:String,
        require:true,
    },
    Judge_Name: {
      type:String,
        require:true,
    },
    Court_Type: {
      type:String,
        require:true,
    },
    Case_Completion_Date: {
      type:String,
        require:true,
    },
    Defendant_Status: {
      type:String,
        require:true,
    },
    Bond_Amount: {
      type:String,
        require:true,
    },
    Next_Last_Settling_Date: {
      type:String,
        require:true,
    },
    },
    {
      collection: 'events'
  }


  );


module.exports = mongoose.model('events',EventsSchema);