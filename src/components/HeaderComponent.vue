<template>
  <header class="header center">
    <router-link class="header__logo" to="/">
      <img class="header__logo__img" src="@/assets/img/logo.png" alt="logo" />
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
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid $colorTitles;
  border-bottom: 1px solid $colorTitles;

  &__logo {
    display: block;

    &__img {
      max-width: 250px;
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
        color: $colorTitlesblue;
        text-shadow: 0.5px 0.5px #c2c4c7;

      }
    }
  }
}
</style>
