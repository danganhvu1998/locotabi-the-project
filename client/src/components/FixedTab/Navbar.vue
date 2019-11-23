<template>
  <div class='navbar navbar-fixed-top'>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top">
      <a href="/">
       <div class="navbar-brand"><img src="../../assets/TheLocoLogo.png" width="90" height="90"></div>
      </a>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/how-the-loco-works">How The Loco works</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
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

        <b-navbar-nav>
          <b-button href="#" class="button" variant="danger" type="submit">Sign Up</b-button>
          <b-button href="#" class="button" variant="success" type="submit">Login</b-button>
        </b-navbar-nav>

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
.navbar{
  height: 10%;
}
.navbar-brand {
  position: relative;
}
.navbar.navbar-light.bg-light{
  /* background-color: transparent!important; */
  background: rgba(220, 220, 220, 0.3)!important;
  color: #ff6666!important;
}
</style>
