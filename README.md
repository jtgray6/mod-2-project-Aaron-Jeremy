# Brew 'n' Review

User Stories
1) As a new user, I want to be able to create and account.
2) As an existing user, I want to be able to login.
3) Once logged in, I want to be able to write reviews of beers.
4) I want to be able to select beer style from existing list.
5) I want to be able to edit and remove reviews.

Reach goals:
1) Newsfeed of reviews
2) Search functionality(on beer_info, search bar that searches beer names, on review_info, search bar that searches review descriptions, etc.)


To-do list:
- Add validations to user, review, and beer models.
- Add `home.html`, `beer_info.html`, `beer_style.html`, and `review_info.html`.
- Add javascript files for each page.
- Add images for beer_styles.


### Method Override  
#### DELETE  
In HTML:  
`<input type="hidden" name="_method" value="delete">`  
In Rails:  
Go to `config/application.rb` and add to Application Class `config.middleware.use Rack::MethodOverride`  
  
#### UPDATE  
In HTML:  
`<input type="hidden" name="_method" value="put">`  
