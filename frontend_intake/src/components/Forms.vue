<template>
  <div class="container">
    <Loading v-if="modalVisible"></Loading>
    <h1 class="text-center">RESTORING JUSTICE</h1>
    <div class="badges">
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(0) }">1</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(1) }">2</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(2) }">3</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(3) }">4</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(4) }">5</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(5) }">6</span>
      <span class="badge rounded-pill" :class="{ 'main-color': isVisible(6) }">7</span>
    </div>
    <!-- creating form inputs for all the respective fields of the intake form -->
    <form class="row g-3 needs-validation d-flex" novalidate @submit.prevent>
      <div v-if="visible == 0" class="container">
        <h2 class>Intake Form</h2>
        <div class="row">
          <div class="col-md-4">
            <label for="01" class="form-label">Case Number</label>
            <input type="number" class="form-control" id="01" required v-model="obj['Case_ID']" />
          </div>

          <div class="col-md-4">
            <label for="02" class="form-label">Client Number</label>
            <input type="number" class="form-control" id="02" required v-model="obj['Client']" />
          </div>
          <div class="col-md-4">
            <label for="03" class="form-label">Start Date</label>
            <input type="date" class="form-control" id="03" required v-model="obj['Start_Date']" />
          </div>
          <div class="col-md-4">
            <label for="04" class="form-label">Close Date</label>
            <input type="date" class="form-control" id="04" required v-model="obj['Close_Date']" />
          </div>
        </div>
        <div class="row">
          <h2 class>General Information</h2>
          <div class="col-md-3">
            <label for="05" class="form-label">First Name</label>
            <input type="text" class="form-control" id="05" required v-model="obj['First']" />
          </div>
          <div class="col-md-3">
            <label for="06" class="form-label">Middle Name</label>
            <input type="text" class="form-control" id="06" required v-model="obj['Middle Name']" />
          </div>
          <div class="col-md-3">
            <label for="07" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="07" required v-model="obj['Last_Name']" />
          </div>
          <div class="col-md-3">
            <label for="08" class="form-label">Birth Date</label>
            <input type="date" class="form-control" id="08" required v-model="obj['Birth_Date']" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-3">
            <label for="09" class="form-label">SSN Number</label>
            <input type="number" class="form-control" id="09" required v-model="obj['SS#']" />
          </div>
          <div class="col-md-3">
            <label for="10" class="form-label">US Citizen</label>
            <select class="form-select" id="10" v-model="obj['US_Citizen_Yes_or_No']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="11" class="form-label">Gender</label>
            <select class="form-select" id="11" v-model="obj['Gender  Male or Female']">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div class="col-md-3">
            <label for="12" class="form-label">TX ID/Driver's License</label>
            <input type="text" class="form-control" id="12" required v-model="obj['TX ID / Driver’s License']" />
          </div>
        </div>
        <div class="row"></div>
      </div>

      <div v-if="visible == 1">
        <h2>Residence Information</h2>
        <div class="row">
          <div class="col-md-4">
            <label for="09" class="form-label">Address</label>
            <input type="text" class="form-control" id="09" required v-model="obj['Address']" />
          </div>
          <div class="col-md-4">
            <label for="10" class="form-label">City</label>
            <input type="text" class="form-control" id="10" required v-model="obj['City']" />
          </div>
          <div class="col-md-4">
            <label for="100" class="form-label">State</label>
            <input type="text" class="form-control" id="100" required v-model="obj['State']" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="11" class="form-label">Zip Code</label>
            <input type="text" class="form-control" id="11" required v-model="obj['Zip_Code']"/>
          </div>
          <div class="col-md-4">
            <label for="12" class="form-label">County</label>
            <input type="text" class="form-control" id="12" required v-model="obj['County']" />
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for="13" class="form-label">In custody?</label>
            <select class="form-select" id="13" v-model="obj['In Custody: Y/N']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for="14" class="form-label">If in custody location</label>
            <input type="text" class="form-control" id="14" required :disabled="obj['In Custody: Y/N']!=='Yes'" v-model="obj['If Yes Location']" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for="15" class="form-label">Height/Weight</label>
            <input type="text" class="form-control" id="15" required v-model="obj['Height/Weight']"/>
          </div>
          <div class="col-md-4">
            <label for="16" class="form-label">Adelphoi</label>
            <select class="form-select" id="16" v-model="obj['Adelphoi: Y/N Name']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for="17" class="form-label">Total Rent</label>
            <input type="text" class="form-control" id="17" required v-model="obj['Total Rent']"/>
          </div>
          <div class="col-md-4">
            <label for="18" class="form-label">Utilities Included?</label>
            <select class="form-select" id="18" v-model="obj['Utilities Included?']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for="19" class="form-label">Is your rent subsidized</label>
            <select class="form-select" id="19" v-model="obj['Is your rent subsidized']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for="20" class="form-label">Are you a single parent?</label>
            <select class="form-select" id="20" v-model="obj['Are you a single parent?']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="visible == 2">
        <h2>Contact Information</h2>
        <div class="row">
          <div class="col-md-4">
            <label for class="form-label">Home Phone</label>
            <input type="text" class="form-control" id required v-model="obj['Home ph#:']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Work Phone</label>
            <input type="text" class="form-control" id required v-model="obj['Work:']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Cell Phone</label>
            <input type="text" class="form-control" id required v-model="obj['Cell']" />
          </div>

          <div class="col-md-4">
            <label for class="form-label">Other Phone</label>
            <input type="text" class="form-control" id required v-model="obj['Other']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Personal Email</label>
            <input type="text" class="form-control" id required v-model="obj['Personal Email']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Other Email</label>
            <input type="text" class="form-control" id required v-model="obj['Other Email']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Marital Status</label>
            <select class="form-select" id v-model="obj['Marital Status Single Married Separated Divorced Widow Common Law']">
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="separated">Separated</option>
              <option value="Divorced">Divorced</option>
              <option value="Widow">Widow</option>
              <option value="Common law">Common law</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Language</label>
            <select class="form-select" id v-model="obj['Language Spanish English Bilingual _________ ________']">
              <option value="Spanish">Spanish</option>
              <option value="English">English</option>
              <option value="bilingual">Bilingual</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Ethnicity</label>
            <select class="form-select" id v-model="obj['Ethnicity Hispanic/Latino AfricanAmerican White/Non-Hispanic Asian _________']">
              <option value="Hispanic/latino">Hispanic/Latino</option>
              <option value="African American">African American</option>
              <option value="White/Non-Hispanic">White/Non-Hispanic</option>
              <option value="Asian">Asian</option>
            </select>
          </div>
        </div>
      </div>

      <div v-if="visible == 3">
        <h2>Employment Information</h2>
        <div class="row">
          <div class="col-md-4">
            <label for class="form-label">Employed - how long?</label>
            <input type="text" class="form-control" id required v-model="obj['Employed']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Employer</label>
            <input type="text" class="form-control" id required v-model="obj['Employer']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Occupation</label>
            <input type="text" class="form-control" id required v-model="obj['Occupation']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Unemployed - how long?</label>
            <input type="text" class="form-control" id required v-model="obj['Unemployed - How Long']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Retired - how long?</label>
            <input type="text" class="form-control" id required v-model="obj['Retired - How Long']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">House wife</label>
            <input type="text" class="form-control" id required v-model="obj['HouseWife']"/>
          </div>
        </div>

        <h2>Education Information</h2>

        <div class="row">
          <div class="col-md-4">
            <label for class="form-label">Have you attended school</label>
            <select class="form-select" id v-model="obj['Have you attended school? YES NO School']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

 
          <div class="col-md-4">
            <label for class="form-label">Last Grade</label>
            <input type="text" class="form-control" id required v-model="obj['Last Grade']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Graduated</label>
            <select class="form-select" id v-model="obj['Graduated Yes No Elementary(0-8)   HighSchool/GED   Attended College   Technical School   Associates   Degree   Bachelor   Degree   Master Degree   Master Degree   PHD _______']">
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              <option value="Elementary(0-8)">Elementary(0-8)</option>
              <option value="High School">High School</option>
              <option value="Attend collegue">Attend collegue</option>
              <option value="Technical School">Technical School</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Bachelor Degree">Bachelor Degree</option>
              <option value="Master Degree">Master Degree</option>
              <option value="PHD">PHD</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Certification</label>
            <input type="text" class="form-control" id required v-model="obj['Certification']"/>
          </div>
        </div>
      </div>

      <div v-if="visible == 4">
        <div class="row">
          <h2>Income Information</h2>
          <div class="col-md-4">
            <label for class="form-label">Are you head of household?</label>
            <select class="form-select" id v-model="obj['Are you head of household Yes No Monthly Income ________']">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Monthly Income</label>
            <input type="text" class="form-control" id required />
          </div>

          <div class="col-md-4">
            <label for class="form-label">Other Income</label>
            <input type="text" class="form-control" id required v-model="obj['Other Income']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Spousal Support</label>
            <input type="text" class="form-control" id required v-model="obj['Spousal Support']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Worker's Comp</label>
            <input type="text" class="form-control" id required v-model="obj['Worker\'s Comp']"/>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Child Support</label>
            <input type="text" class="form-control" id required v-model="obj['Child Support']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">TANF</label>
            <input type="text" class="form-control" id required v-model="obj['TANF']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">SSI</label>
            <input type="text" class="form-control" id required v-model="obj['SSI']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Unemployment</label>
            <input type="text" class="form-control" id required v-model="obj['Unemployment']"/>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Social Security</label>
            <input type="text" class="form-control" id required v-model="obj['Social Security']"/>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Others</label>
            <input type="text" class="form-control" id required v-model="obj['Others']"/>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Do you need: clothing, personal care items, transportation assistance?</label>
            <input type="text" class="form-control" id required v-model="obj['Do you need: clothing, personal care items, transportation assistance,']"/>
          </div>
        </div>
      </div>

      <div v-if="visible == 5">
        <div class="row">
          <h2>Health Insurance Information</h2>
          <div class="col-md-4">
            <label for class="form-label">Do you have health insurance?</label>
            <select class="form-select" id >
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Select Insurance</label>
            <select class="form-select" id v-model="obj['Private Insurance   Medicaid    Medicare   Chip    Gold Card   WIC']">
              <option value="private insurance">private insurance</option>
              <option value="medicaid">medicaid</option>
              <option value="medicare">medicare</option>
              <option value="chip">chip</option>
              <option value="gold card">gold card</option>
              <option value="wic">wic</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <label for class="form-label">Do you receive food stamps?</label>
            <select class="form-select" id v-model="obj['Do you recive Food Stamps Y/N']">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div class="col-md-4">
            <label for class="form-label">If yes, how much?</label>
            <input type="text" class="form-control" id required v-model="obj['If yes, how much?']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">If no, why not?</label>
            <select class="form-select" id v-model="obj['If no, why not? Do not qualify    Have not Applied   Application in Process   Need Help Applying']">
              <option value="do not qualify">do not qualify</option>
              <option value="have not applied">have not applied</option>
              <option value="aplication in process">aplication in process</option>
              <option value="need help applying">need help applying</option>
            </select>
          </div>
        </div>

        <div class="row">
          <h2>Substance Use</h2>
          <div class="col-md-4">
            <label for class="form-label">Do you use drugs or alchohol?</label>
            <select class="form-select" id v-model="obj['Do you use drugs or alcohol? Y/N']">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">If yes, what and how much?</label>
            <input type="text" class="form-control" id required v-model="obj['If yes,what and how much?']"/>
          </div>


          <div class="col-md-4">
            <label for class="form-label">Do you want treatment?</label>
            <select class="form-select" id v-model="obj['Do you want Treatment? Y/N']">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">notes</label>
            <input type="text" class="form-control" id required v-model="obj['']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">treatment history</label>
            <input type="text" class="form-control" id required v-model="obj['Treatment History']"/>
          </div>
        </div>
      </div>

      <div v-if="visible == 6">
        <div class="row">
          <h2>Legal Information</h2>
          <div class="col-md-4">
            <label for class="form-label">Case Number</label>
            <input type="text" class="form-control" id required v-model="obj['Case#']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Mental Competency?</label>
            <select class="form-select" id v-model="obj['Mental Competency: Y/N']">
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>

          <div class="col-md-4">
            <label for class="form-label">File Date</label>
            <input type="text" class="form-control" id required v-model="obj['File Date']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Prior Attorney Name</label>
            <input type="text" class="form-control" id required v-model="obj['Prior Attorney Name']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Prior Attorney Caseload</label>
            <input type="text" class="form-control" id required v-model="obj['Prior Attorney Caseload']"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3">
            <label for class="form-label">1.Charge:</label>
            <input type="text" class="form-control" id required v-model="obj['Charge 1']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">1.Degree</label>
            <input type="text" class="form-control" id required v-model="obj['Degree 1']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">1.Punish range</label>
            <input type="text" class="form-control" id required v-model="obj['Punishment Range 1']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">1.Disposition</label>
            <input type="text" class="form-control" id required v-model="obj['Disposition 1']"/>
          </div>

          <div class="col-md-3">
            <label for class="form-label">2.Charge:</label>
            <input type="text" class="form-control" id required v-model="obj['Charge 2']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">2.Degree</label>
            <input type="text" class="form-control" id required v-model="obj['Degree 2']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">2.Punish range</label>
            <input type="text" class="form-control" id required v-model="obj['Punishment Range 2']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">2.Disposition</label>
            <input type="text" class="form-control" id required v-model="obj['Disposition 2']"/>
          </div>

          <div class="col-md-3">
            <label for class="form-label">3.Charge:</label>
            <input type="text" class="form-control" id required v-model="obj['Charge 3']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">3.Degree</label>
            <input type="text" class="form-control" id required v-model="obj['Degree 3']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">3.Punish range</label>
            <input type="text" class="form-control" id required v-model="obj['Punishment Range 3']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">3.Disposition</label>
            <input type="text" class="form-control" id required v-model="obj['Disposition 3']"/>
          </div>

          <div class="col-md-3">
            <label for class="form-label">4.Charge:</label>
            <input type="text" class="form-control" id required v-model="obj['Charge 4']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">4.Degree</label>
            <input type="text" class="form-control" id required v-model="obj['Degree 4']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">4.Punish range</label>
            <input type="text" class="form-control" id required v-model="obj['Punishment Range 4']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">4.Disposition</label>
            <input type="text" class="form-control" id required v-model="obj['Disposition 4']"/>
          </div>

          <div class="col-md-3">
            <label for class="form-label">5.Charge:</label>
            <input type="text" class="form-control" id required v-model="obj['Charge 5']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">5.Degree</label>
            <input type="text" class="form-control" id required v-model="obj['Degree 5']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">5.Punish range</label>
            <input type="text" class="form-control" id required v-model="obj['Punishment Range 5:']"/>
          </div>
          <div class="col-md-3">
            <label for class="form-label">5.Disposition</label>
            <input type="text" class="form-control" id required v-model="obj['Disposition 5']"/>
          </div>
        </div>

        <div class="row">
          <div class="col-md-4">
            <label for class="form-label">Current Court</label>
            <input type="text" class="form-control" id required v-model="obj['Current Court']"/>
          </div>
          <div class="col-md-4">
            <label for class="form-label">Court Address</label>
            <input type="text" class="form-control" id required v-model="obj['Court Address']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Judge Name</label>
            <input type="text" class="form-control" id required v-model="obj['Judge Name:']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Court Type</label>
            <input type="text" class="form-control" id required v-model="obj['Court Type']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Case Completion Date</label>
            <input type="text" class="form-control" id required v-model="obj['Case Completion Date']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Defendant Status</label>
            <input type="text" class="form-control" id required v-model="obj['Defendant Status']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Bond Amount</label>
            <input type="text" class="form-control" id required v-model="obj['Bond Amount']"/>
          </div>

          <div class="col-md-4">
            <label for class="form-label">Next/Last Settling Date</label>
            <input type="text" class="form-control" id required v-model="obj['Next/Last Settling Date']"/>
          </div>
        </div>
      </div>

            <div class="col-12">
                <button @click="handler(-1)" class="btn btn-primary me-2">Previous</button>
                <button @click="handler(1)" class="btn btn-primary">Next</button>
                <button @click="sendData" v-if="visible == 6" class="btn" :disabled="message=='Record added'">{{message}}</button>
            </div>
        </form>
    </div>
</template>

<!-- script to setup and input the form data into the backend database -->
<script >
import { ref } from 'vue'
import Loading from './Loading.vue'
export default {
  name: "Forms",
   components: {
    Loading
  },
  props: {
    msg: String,
  },
  setup() {
    let obj = ref({
   "Case_ID": "",
     "Client": "",
     "Start_Date": "",
     "Close_Date": "",
     "Last_Name": "",
     "First" :"",
     "Middle Name": "",
     "Birth_Date": "",
     "SS#": "",
     "US_Citizen_Yes_or_No": "",
     "Gender  Male or Female": "",
     "TX ID / Driver’s License": "",
     "Address": "",
     "City": "",
     "State":"",
     "Zip_Code": "",
     "County": "",
     "Height/Weight": "",
     "In Custody: Y/N": "",
     "If Yes Location": "",
     "Adelphoi: Y/N Name": "",
     "Total Rent": "",
     "Utilities Included?": "",
     "Is your rent subzidized": "",
     "Are you a single parent?": "",
     "Home ph#:": "",
     "Work:": "",
     "Cell": "",
     "Other": "",
     "Personal Email": "",
     "Other Email": "",
     "Marital Status Single Married Separated Divorced Widow Common Law": "",
     "Language Spanish English Bilingual _________ ________": "",
     "Ethnicity Hispanic/Latino AfricanAmerican White/Non-Hispanic Asian _________": "",
     "Employed": "",
     "Employer": "",
     "Occupation": "",
     "Unemployed - How Long": "",
     "Retired - How Long": "",
     "HouseWife": "",
     "Have you attended school? YES NO School": "",
     "Last Grade": "",
     "Graduated Yes No Elementary(0-8)   HighSchool/GED   Attended College   Technical School   Associates   Degree   Bachelor   Degree   Master Degree   Master Degree   PHD _______": "",
     "Certification:": "",
     "Are you head of household Yes No Monthley Income ________": "",
     "Other Income": "",
     "Spousal Support": "",
     "Worker's Comp": "",
     "Child Support": "",
     "TANF": "",
     "SSI": "",
     "Unemployment": "",
     "Social Security": "",
     "Others": "",
     "Do you need: clothing, personal care items, transportation assistance,": "",
     "Private Insurance   Medicaid    Medicare   Chip    Gold Card   WIC": "",
     "Do you recive Food Stamps Y/N": "",
     "If yes, how much?": "",
     "If no, why not? Do not qualify    Have not Applied   Application in Process   Need Help Applying": "",
     "Do you use drugs or alcohol? Y/N": "",
     "If yes,what and how much?": "",
     "Do you want Treatment? Y/N": "",
     "Treatment History": "",
     "Case#": "",
     "Mental Competency: Y/N": "",
     "File Date": "",
     "Prior Attorney Name": "",
     "Prior Attorney Caseload": "",
     "Charge 1": "",
     "Degree 1": "",
     "Punishment Range 1": "",
     "Disposition 1": "",
     "Charge 2": "",
     "Degree 2": "",
     "Punishment Range 2": "",
     "Disposition 2": "",
     "Charge 3": "",
     "Degree 3": "",
     "Punishment Range 3": "",
     "Disposition 3": "",
     "Charge 4": "",
     "Degree 4": "",
     "Punishment Range 4": "",
     "Disposition 4": "",
     "Charge 5": "",
     "Degree 5": "",
     "Punishment Range 5:": "",
     "Disposition 5": "",
     "Current Court": "",
     "Court Address": "",
     "Judge Name:": "",
     "Court Type": "",
     "Case Completion Date": "",
     "Defendant Status": "",
     "Bond Amount": "",
     "Next/Last Settling Date": ""
    });
    let visible = ref(0);
    let handler = (num) => {
      let max = 6;
      visible.value += num;
      if (visible.value < 0) {
        visible.value = 0;
      }
      if (visible.value > max) {
        visible.value = max;
      }
    };

    let isVisible = (num) => {
      if (num == visible.value) {
        return true;
      }
      return false;
    };

    let setVisible =(num)=>{
      visible.value=num
    }

    let modalVisible= ref(false)

    let message=ref("Submit")

    let sendData = () => {
      modalVisible.value=true;
      setTimeout(function(){modalVisible.value=false }, 1000);
      let url = "http://localhost:3000/form";
      fetch(url, { method: "POST", body: JSON.stringify(obj.value), headers: { "Content-type": "application/json; charset=UTF-8" } })
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          if (res=="Record is added to the database"){
            message.value="Record added"
          }
          })
        .catch((err) => console.log(err));

    };
    return { obj, handler, visible, isVisible,setVisible, sendData, modalVisible, message};
  },
};
</script>

<!-- Formatting -->
<style scoped>
h2 {
  color: #1565C0;
  text-transform: capitalize;
}
label {
  text-transform: capitalize;
}
.badges {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.badge {
  background-color: grey;
}
.main-color {
  background-color: #1E88E5;
}
span{
  cursor:pointer;
}
button{
  background-color:#1565C0;
  color:white;
}
button:active,button:hover{
  color:white;
  background-color:#1565C0;
}
</style>
