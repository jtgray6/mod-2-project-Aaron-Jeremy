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


lager = Style.create(name: "Lager", image_url: "./images/lager.jpg", description: "Lager is a type of beer conditioned at low temperatures.[1] Lagers can be pale, amber, or dark. Pale lager is the most widely consumed and commercially available style of beer.  As well as maturation in cold storage, most lagers are also distinguished by the use of Saccharomyces pastorianus yeast, a 'bottom-fermenting' yeast that also ferments at relatively cold temperatures.")
ipa = Style.create(name: "India Pale Ale", image_url: "./images/ipa.jpg", description: "India pale ale (IPA) is a hoppy beer style within the broader category of pale ale. The export style of pale ale, which had become known as India pale ale, developed in England around 1840, later became a popular product there. IPAs have a long history in Canada and the United States, and many breweries there produce a version of the style.")
pilsner = Style.create(name: "Pilsner", image_url: "./images/pils.jpg", description: "Pilsner (also pilsener or simply pils) is a type of pale lager. It takes its name from the Czech city of Pilsen, where it was first produced in 1842 by Bavarian brewer Josef Groll. The world's first blond lager, the original Pilsner Urquell, is still produced there today.")
porter = Style.create(name: "Porter", image_url: "./images/porter.jpg", description: "Porter: Porter is a dark style of beer developed in London from well-hopped beers made from brown malt. The name was first recorded in the 18th century, and is thought to come from its popularity with street and river porters, who carried objects for others.")
stout = Style.create(name: "Stout", image_url: "./images/stout.jpg", description: "Stout is a dark, top-fermented beer with a number of variations, including dry stout, Baltic porter, milk stout, and imperial stout. The name 'stout', used for a dark beer, is believed to have come about because strong porters were marketed under such names as 'extra porter', 'double porter', and 'stout porter'.")
pale_ale = Style.create(name: "Pale Ale", image_url: "./images/paleale.jpg", description: "Pale ale is a top-fermented beer made with predominantly pale malt. The highest proportion of pale malts results in a lighter colour. Different brewing practices and hop levels have resulted in a range of different tastes and strengths within the pale ale family. Style includes Amber ale, American pale ale, Blonde ale, English bitter, and Red ale.")
sour = Style.create(name: "Sour", image_url: "./images/sour.jpg", description: "Sour beer is beer which has an intentionally acidic, tart, or sour taste. Modern sour styles include American wild ale, Berliner Weisse, and Gose. Traditional sour beer styles include Belgian lambics, gueuze, and Flanders red ale.  The most common microbes used to intentionally sour beer are bacteria Lactobacillus and Pediococcus, while Brettanomyces can also add some acidity.")
bock = Style.create(name: "Bock", image_url: "./images/bock.jpg", description: "Bock is a strong lager of German origin. Originally a dark beer, a modern bock can range from light copper to brown in colour. The style is very popular, with many examples brewed internationally.  Includes variations such as maibock (lighter bock), doppelbock (double bock), and eisbock (super strong bock).")
marzen = Style.create(name: "Marzen", image_url: "./images/marzen.jpg", description: "Märzen or Märzenbier (German: March or March beer, respectively) is a lager that originated in Bavaria. It has a medium to full body and may vary in color from pale through amber to dark brown. It is the beer style that traditionally is served at Oktoberfest due to its long shelf life, though today it is no longer common there.")
wheat = Style.create(name: "Wheat", image_url: "./images/wheat.jpg", description: "Wheat beer is a beer, usually top-fermented, which is brewed with a large proportion of wheat relative to the amount of malted barley. The two main varieties are Weißbier, based on the German tradition, and Witbier, based on the Belgian tradition; minor types include Lambic (made with wild yeasts and bacteria), Berliner Weisse (a cloudy, sour beer), and Gose (a German-type sour, salty, herbal beer).")

shiner_bock = Beer.create(name: "Shiner Bock", brewery: "Spoetzl Brewery", abv: 4.5, style: bock)

Review.create(description: "Kinda gross, very malty", rating: 1.5, beer: shiner_bock, user: User.all.first)