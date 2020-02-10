class Beer < ApplicationRecord
  belongs_to :style
  has_many :reviews
  has_many :users, through: :reviews
end
