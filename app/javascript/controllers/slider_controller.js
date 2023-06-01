import { Controller } from "@hotwired/stimulus";
import Swiper from 'swiper';

export default class extends Controller {
  static targets = ["button", "slide"];
  swiper = null;

  connect() {
    this.swiper = new Swiper('.mySwiper', {
      // Your Swiper options here
    });

        // Selecione todos os botões de sabor
    const flavorButtons = this.buttonTargets;

    // Adicione um manipulador de eventos para cada botão
    flavorButtons.forEach((button) => {
      button.addEventListener('click', this.goTo.bind(this));
    });
  }


  goTo(event) {
    event.preventDefault();

    // Get the index from the clicked button's data attribute
    const index = parseInt(event.currentTarget.dataset.index);

    // Use the Swiper API to slide to the desired slide
    this.swiper.slideTo(index);

    if (this.activeButton) {
        this.activeButton.classList.remove('active'); // Remove a classe "active" do botão anteriormente ativo
      }

      event.currentTarget.classList.add('active');
      this.activeButton = event.currentTarget; // Atualiza o botão ativo atualmente
    }


  }
