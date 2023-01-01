const burger = document.querySelector('.burger'),
      navigation = document.querySelector('.navigation');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation_active');
});