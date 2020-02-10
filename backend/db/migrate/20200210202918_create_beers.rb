class CreateBeers < ActiveRecord::Migration[6.0]
  def change
    create_table :beers do |t|
      t.string :name
      t.string :brewery
      t.float :abv
      t.references :style, null: false, foreign_key: true

      t.timestamps
    end
  end
end
