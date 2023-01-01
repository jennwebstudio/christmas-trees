const buttonsOrder = document.querySelectorAll('.product__button_order'),
      overlayOrder = document.querySelector('.overlay__order'),
      headerConsultation = document.querySelector('.header__consultation'),
      overlayConsultation = document.querySelector('.overlay__consultation');

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

      headerConsultation.addEventListener('click',() => {
        overlayConsultation.classList.add('overlay_active');
        
        const  consultation = document.querySelector('.modal__consultation');
        consultation.value = headerConsultation.dataset.order;  
        
      });

      overlayConsultation.addEventListener('click', event => {
        const target = event.target;
        if ( target === overlayConsultation || target.closest('.modal__close')) {
          overlayConsultation.classList.remove('overlay_active');
        }
      });
