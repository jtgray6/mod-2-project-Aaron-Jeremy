# Brew 'n' Review

## Overview

Brew 'n' Review is a Beer Journaling App. Users can "log in", add, read, edit, and delete their reviews, and view reviews by others. They can also filter for specific beers or breweries. In addition, there is a short description for each type of beer.

## User Stories

- As a new user, I want to be able to create and account.

- As an existing user, I want to be able to login.

- Once logged in, I want to be able to write reviews of beers.

- I want to be able to select beer style from existing list.

- I want to be able to edit and remove reviews.

## Installation Instructions

1. This is a Ruby app, which means you need to install Ruby for the backend. We used Ruby 2.6.1. [Click here for instructions on installing Ruby.](https://www.ruby-lang.org/en/documentation/installation/)

2. Once Ruby is installed, you'll need to run `bundle install` in the directory where you clone this repository to install all the dependencies we used. [You may need to install Rails, too.](http://installrails.com/)

3. You'll need to run `rails db:migrate` to create the tables, followed by `rails db:seed` to create seed data.

4. Run `rails s -p 3000` to run the rails server on port 3000.

5. Open index.html.

## Demo

https://youtu.be/a6KY1_6MswQ
