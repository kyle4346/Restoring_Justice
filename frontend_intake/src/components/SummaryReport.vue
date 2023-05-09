<template>
  <div class="container d-flex flex-column">
    <h2 class="text-center mt-2">Summary Report</h2>
    <!-- create buttons to retreive data from database -->
    <button class="btn text-center my-4 m-auto" @click="getData">Get All Data</button>
    <form class="form-inline m-b-4">
      <div class="row justify-content-center form-row">
        <input class="form-control col-md-2" type="search" placeholder="Client ID" aria-label="Search" v-model="id" />
        <button class="btn btn-outline-success my-2 my-sm-0 col-md-2" type="submit" @click.prevent="getDataById">Search by ID</button>
      </div>
    </form>
  </div>
<!-- table design and delete icon for report -->
  <div class="table-responsive mt-2 mb-4">
    <table class="table table-striped table-sm table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col" v-for="data in tableData" :key="data">
            {{ data[0] }}
          </th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(elem, index) in allData" :key="elem.id">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td v-for="data in tableData" :key="data">
              {{ elem[data[1]] }}
            </td>
            <td class="text-center" scope="row">
              <!-- trash can icon for delete -->
              <svg
                @click="deleteData(elem._id)"
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                class="bi bi-trash" 
                viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
              </svg>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>
<!-- create/pull/delete table for report -->
<script>
import { ref, computed } from "vue";
//This actually is exported from the App.vue when we created the script there
export default {
  name: "SummaryReport",
//This is used for setting up specific forms content. We chose to add only a few of the fields because there is 72 fields in total. 
//You can edit them from the forms.vue
  setup() {
    let allData = ref([]);

    let tableData = [
      ["Case ID", "Case_ID"],
      ["Client", "Client"],
      ["First name", "First"],
      ["Middle name", "Middle Name"],
      ["Last Name", "Last_Name"],
      ["Start Date", "Start_Date"],
      ["Close Date", "Close_Date"],
      ["US Citizen", "US_Citizen_Yes_or_No"],
      ["Gender", "Gender  Male or Female"],
      ["Address", "Address"],
      ["City", "City"],
      ["State", "State"],
      ["Zip Code", "Zip_Code"],
      ["County", "County"],
      ["Birth Date", "Birth_Date"],
      ["Social Security", "SS#"],
      ["ID/Drivers license", "TX ID / Driver’s Licens"],
      ["Height and Weight", "Height/Weight"],
      ["Custody: Y or N", "In Custody: Y/N"],
      ["Location of Custody", "If Yes Location"],
      ["Adelphoi", "Adelphoi: Y/N Name"],
      ["Total Rent", "Total Rent"],
      ["Utilities Included", "Utilities Included?"],
      ["Is your rent subsidized?", "Is your rent subsidized"],
      ["Are you a single parent?", "Are you a single parent?"],
      ["Cell phone number", "Cell"],
      ["Other", "Other"],
      ["Personal Email", "Personal Email"],
      ["Marital Status", "Marital Status Single Married Seperated Divorced Widow Common Law"],
      ["Language", "Language Spanish English Bilingual _________ ________"],
      ["Employed", "Employed"],
      ["Employer", "Employer"],
      ["Occupation", "Occupation"],
      ["Unemployment time", "Unemployed - How Long"],
      ["Retirement time", "Retired - How Long"],
    ];
//Everything below is code for the buttons.
    let filteredData = computed(() => {
      let result = allData.value.filter((x) => "Start_Date" in x);
      return result;
    });
//delete stuff
    let deleteData = (id) => {
      console.log(id);
      allData.value = allData.value.filter((x) => {
        return x._id !== id;
      });
      let url="http://localhost:3000/forms/id/"+id
      fetch(url, {
        method: "DELETE",
      })
    };
//get data from backend
    let getData = () => {
      fetch("http://localhost:3000/forms")
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          allData.value = res;
        })
        .catch((err) => console.log(err));
    };

    let id = ref("");
//get data by 
    let getDataById = () => {
      fetch("http://localhost:3000/forms/" + id.value)
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          allData.value = [res];
        })
        .catch((err) => console.log(err));
    };

    return { getData, allData, filteredData, tableData, deleteData, id, getDataById };
  },
};
</script>
<!-- styling for page -->
<style scoped>
button {
  background-color: #1565C0 !important;
  color: white !important;
}
/* thead{
    background-color:#4c5c00!important;
     color:white!important;
} */
.table-responsive {
  max-width: 90%;
  margin: auto;
}
svg {
  width: 15px;
  filter: invert(23%) sepia(81%) saturate(2756%) hue-rotate(339deg) brightness(94%) contrast(83%);
  cursor: pointer;
}
input {
  width: unset;
}
</style>
