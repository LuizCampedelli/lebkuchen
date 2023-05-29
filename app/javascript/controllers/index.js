import { application } from "./application"

import CookieBannerController from "./cookie_banner_controller"
application.register("cookie-banner", CookieBannerController)

import MapController from "./map_controller"
application.register("map", MapController)

import NavbarController from "./navbar_controller"
application.register("navbar", NavbarController)

import ScrollRevealController from "./scroll_reveal_controller"
application.register("scroll-reveal", ScrollRevealController)

import SliderController from "./slider_controller"
application.register("slider", SliderController)
