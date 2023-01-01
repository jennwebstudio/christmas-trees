const buttonsOrder = document.querySelectorAll('.product__button_order'),
      overlayOrder = document.querySelector('.overlay__order');

      buttonsOrder.forEach(buttonOrder => {
        buttonOrder.addEventListener('click', () => {
          overlayOrder.classList.add('overlay_active');
          const order = document.querySelector('.modal__order');
          order.value = buttonOrder.dataset.order;
        });
      });

      overlayOrder.addEventListener('click', event => {
        const target = event.target;
        if ( target === overlayOrder || target.closest('.modal__close')) {
          overlayOrder.classList.remove('overlay_active');
        }
      });
