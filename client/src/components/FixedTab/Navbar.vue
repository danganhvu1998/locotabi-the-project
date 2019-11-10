<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
       <div class="navbar-brand"><img src="../../assets/TheLocoLogo.png" width="90" height="90"></img></div> 
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">How The Loco works</b-nav-item>
          <b-nav-item href="#">Blog</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Language" right>
            <b-dropdown-item href="#">VI</b-dropdown-item>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">JA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="Currency" right>
            <b-dropdown-item href="#">VND</b-dropdown-item>
            <b-dropdown-item href="#">USD</b-dropdown-item>
            <b-dropdown-item href="#">YEN</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-navbar-form>
            <b-button class="my-2 my-sm-0" type="submit">Sign Up</b-button>
            <b-button class="my-2 my-sm-0" type="submit">Login</b-button>
          </b-navbar-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style>
.navbar-brand {
  position: relative;
}
.navbar.navbar-light.bg-light{
  background-color: white!important;
  color: #ff6666!important;
}
</style>
