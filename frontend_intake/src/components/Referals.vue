<template> <!-- Template used to create the form-->
  <div class="container">
    <h2 class="text-center mt-2">Referrals</h2>
    <form class="needs-validation" novalidate>
      <div class="row g-3">
        <div class="col-md-6">
          <label for="address" class="form-label">Client Name</label>
          <input type="text" class="form-control" id="" placeholder="Client Name" required />
          <div class="invalid-feedback">Please enter client name.</div>
        </div>
<!--Drop down for types of social services -->
        <div class="col-md-5">
          <label for="country" class="form-label">Type of Social Service</label>
          <select class="form-select" id="social" required>
            <option value="nutrition">Nutrition</option>
            <option value="housin">Housing</option>
            <option value="Legal">Legal</option>
            <option value="Family service">Family Service</option>
            <option value="Clothing">Clothing</option>
            <option value="Transportation">Transportation</option>
            <option value="Identification">Identification</option>
            <option value="immigration">Immigration</option>
            <option value="Anger management">Anger Management</option>
            <option value="Mental health">Mental Health</option>
            <option value="Drop-in centers">Drop-in Centers</option>
             <option value="Disabilities services">Disabilities Services</option>
             <option value="Job training">Job Training</option>
             <option value="Substance use disorder service">Substance Use Disorder Service</option>
             <option value="Drug testing">Drug Testing</option>
             <option value="Other">Other</option>
          </select>
          <div class="invalid-feedback">Please select a valid service.</div>
        </div> <!-- Typical form related fields for getting simple information from client-->
        <div class="col-sm-6">
          <label for="firstName" class="form-label">Case Manager Name</label>
          <input type="text" class="form-control" id="firstName" placeholder="" value="" required />
        </div>

        <div class="col-sm-5">
          <label for="lastName" class="form-label">Date</label>
          <input type="date" class="form-control" id="lastName" placeholder="" value="" required />
        </div>
            <div class="col-11">
              <label for="email" class="form-label">Time Spent on the Case </label>
              <input type="email" class="form-control" id="email" placeholder="" />
            </div>

        <div class="col-11">
          <label for="username" class="form-label">Notes <span class="text-muted">(Optional)</span></label>
          <div class="input-group has-validation">
            <span class="input-group-text">Notes</span>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
        </div>

      </div>

      <h4 class="mb-3 mt-4">Client Followed Through with Referral?</h4>
      <!-- Radio Buttons -->
      <div class="my-3">
        <div class="form-check">
          <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required />
          <label class="form-check-label" for="credit">Yes</label>
        </div>
        <div class="form-check">
          <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required />
          <label class="form-check-label" for="debit">No</label>
        </div>
      </div>

      <hr class="my-4" />

      <h4 class="mb-3">Was the Underlying Need Addressed?</h4>

      <div class="my-3">
        <div class="form-check">
          <input id="need1" name="need" type="radio" class="form-check-input" checked required />
          <label class="form-check-label" for="need1">Yes</label>
        </div>
        <div class="form-check">
          <input id="need2" name="need" type="radio" class="form-check-input" required />
          <label class="form-check-label" for="need2">No</label>
        </div>
      </div>

      <hr class="my-4" />

      <button class="w-100 btn btn-primary btn-lg  mb-4" type="submit" @click.prevent="this.$emit('send')">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "Referals",
};
</script>

<!-- Styles to make the page look cool-->
<style>
button {
  background-color: #1565C0 !important;
  color: white !important;
}
</style>
