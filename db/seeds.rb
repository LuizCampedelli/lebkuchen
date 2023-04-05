# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning data base"
Location.destroy_all

puts "Creating locations"

location = Location.new(
  name: "Fleischerei Göbel",
  address: "33 Dudenhöfer Strasse, Rodgau"
)
location.save

location1 = Location.new(
  name: "Fleischerei Göbel",
  address: "37 Langstrasse, Hanau"
)
location1.save

location2 = Location.new(
  name: "Edeka Ermel",
  address: "3 Hegelstrasse, Rodgau"
)
location2.save

location3 = Location.new(
  name: "Alexandras Marktstübchen",
  address: "46 Bischof-Ketteler-Straße, Mühlheim am Main"
)
location3.save

location4 = Location.new(
  name: "Sport aktiv",
  address: "6 Ludwigstrasse, Rodgau"
)
location4.save

puts "Finished"
