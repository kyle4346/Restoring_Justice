<!-- <template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/showforms">Show Forms</router-link> |
    <router-link to="/Forms">Create Forms</router-link>

    Router view
    <div class="container mt-5">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
-->
<!-- --------------------------------------------------------------- Everything above is now deprecated... Complete Overhaul of app.vue-->


<template> <!-- Everything in here shows the navbar, we added some aesthetic to make it more -->
<nav class="navbar navbar-dark  navbar-expand-lg main-color">
  <div class="container container-fluid">
    <a class="navbar-brand" href="#">Restoring Justice</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div class="navbar-nav"> <!--These shows the links for the pages in the navbar. We removed the router links above to change to this version -->
        <a class="nav-link " :class="{active:active=='form'}" aria-current="page" href="#" @click.prevent="changeActive('form')">Intake Form</a>
        <a class="nav-link" :class="{active:active=='referals'}" href="#" @click.prevent="changeActive('referals')">Referrals</a>
        <a class="nav-link" :class="{active:active=='summary'}" href="#" @click.prevent="changeActive('summary')">Summary Report</a>
      </div>
    </div>
  </div>
</nav>
<!-- This connects to the pages themselves as well and helps to connect them together-->
  <Forms v-if="active=='form'"></Forms>
  <SummaryReport v-if="active=='summary'"></SummaryReport>
  <Referals v-if="active=='referals'" @send="changeActive('summary')"></Referals>

  <!-- Footer section... it's still WIP since we have everything with us already-->
  <footer class="footer mt-auto py-3 ">
  <div class="container text-end">
    <span class="">Restoring Justice All Rights Reserved</span>
  </div>
</footer>
</template>

<script> 
import Forms from './components/Forms.vue'
import Referals from './components/Referals.vue'
import SummaryReport from './components/SummaryReport.vue'
//scripts are used for link them together by importing the links from the template to the other pages.
import {ref} from "vue"

export default {
  name: 'App',
  components: {
    Forms,
    SummaryReport,
    Referals
  },
  setup(){
    let active= ref("form");
    let changeActive=(valor)=>{
  
      active.value=valor
    }
    return {active,changeActive}
  }
}
</script>

<!-- Simple styling for the website. If all else fails... everything else is styled from *-->
<style>

*{
  box-sizing:border-box;
  padding:0;
  margin:0;
}

.main-color {
  background-color:#1565C0;
  color:white!important;
}
.main-color a{
  color:white;
}
#app{
  display:flex;
  flex-flow:column;
  min-height:100vh;
}

footer{
   background-color:#1565C0;
   color:white!important;

}
</style>
