<template>
  <header class="header center">
    <router-link class="header__logo" to="/">
      <img class="header__logo__img" src="@/assets/img/astro-logo-96x103.png" alt="logo" />
      <h1 class="header__logo__text"> <span>ASTRO</span> <br> COMPUTERS</h1>
    </router-link>

    <nav>
      <ul class="header__nav">
        <li class="header__nav__li">
          <router-link to="/Company">О Компании</router-link>
        </li>
        <li class="header__nav__li">
          <router-link to="/Contacts">Контакты</router-link>
        </li>
        <li class="header__nav__li">
          <router-link to="/Services">Услуги</router-link>
        </li>
        <li class="header__nav__li">
          <router-link to="/Products">Продукция</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import "@/style/vars.scss";

.header {
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $colorTitles;
  border-bottom: 1px solid $colorTitles;

  &__logo {
    display: block;
    display: flex;
    align-items: center;
    gap: 20px;

    &__img {
      max-width: 250px;
    }
    &__text {
      text-align: center;
      line-height: 1.2;
      font-size: 30px;
      font-weight: 400;
      color: $colorTitles;
      letter-spacing: 2px;
      & span {
        font-weight: 800;
        font-size: 48px;
        letter-spacing: 5px
      }
    }
  }

  &__nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    list-style-type: none;

    &__li a {
      padding: 10px;
      font-style: normal;
      line-height: 1.5;
      font-size: 24px;
      font-weight: 600;
      color: $colorTitles;

      &:hover {
        color: $colorText;
        text-shadow: 0.1px 0.1px $colorText;

      }
    }
  }
}
</style>
