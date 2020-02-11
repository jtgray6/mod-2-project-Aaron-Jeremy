class User < ApplicationRecord
    has_many :reviews
    has_many :beers, through: :reviews

    validates :username, presence: true, uniqueness: { case_sensitive: false }
    validates :password, length: { minimum: 8 }
end
