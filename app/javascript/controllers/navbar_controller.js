import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["toggle", "menu", "hamburgerIcon", "navItem"]

  connect() {
    this.toggleMenu = this.toggleMenu.bind(this)
    this.hideMenu = this.hideMenu.bind(this)

    this.toggleTarget.addEventListener("click", this.toggleMenu)
    this.navItemTargets.forEach((navItem) => {
      navItem.addEventListener("click", this.hideMenu)
    })
  }

  disconnect() {
    this.toggleTarget.removeEventListener("click", this.toggleMenu)
    this.navItemTargets.forEach((navItem) => {
      navItem.removeEventListener("click", this.hideMenu)
    })
  }

  toggleMenu() {
    this.menuTarget.classList.toggle("show-menu")
    this.hamburgerIconTarget.classList.toggle("open")
  }

  hideMenu() {
    this.menuTarget.classList.remove("show-menu")
    this.hamburgerIconTarget.classList.remove("open")
  }
}
