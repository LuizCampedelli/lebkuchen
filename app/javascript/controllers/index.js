// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./application"

import HelloController from "./hello_controller"
application.register("hello", HelloController)

import MapController from "./map_controller"
application.register("map", MapController)

import ModalController from "./modal_controller"
application.register("modal", ModalController)

import { Application } from 'stimulus';
import { definitionsFromContext } from 'stimulus/webpack-helpers';
import ScrollRevealController from './scroll_reveal_controller';
const application = Application.start();
const context = require.context('./', true, /_controller\.js$/);
application.load(definitionsFromContext(context));
application.register('scroll-reveal', ScrollRevealController);
