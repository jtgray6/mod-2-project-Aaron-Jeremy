# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Review.destroy_all
Beer.destroy_all
Style.destroy_all


lager = Style.create(name: "Lager", image_url: "./images/lager.jpg")
ipa = Style.create(name: "India Pale Ale", image_url: "./images/ipa.jpg")
pilsner = Style.create(name: "Pilsner", image_url: "./images/pils.jpg")
porter = Style.create(name: "Porter", image_url: "./images/porter.jpg")
stout = Style.create(name: "Stout", image_url: "./images/stout.jpg")
pale_ale = Style.create(name: "Pale Ale", image_url: "./images/paleale.jpg")
sour = Style.create(name: "Sour", image_url: "./images/sour.jpg")
bock = Style.create(name: "Bock", image_url: "./images/bock.jpg")
marzen = Style.create(name: "Marzen", image_url: "./images/marzen.jpg")
wheat = Style.create(name: "Wheat", image_url: "./images/wheat.jpg")

shiner_bock = Beer.create(name: "Shiner Bock", brewery: "Spoetzl Brewery", abv: 4.5, style: bock)

Review.create(description: "Kinda gross, very malty", rating: 1.5, beer: shiner_bock, user: User.all.first)