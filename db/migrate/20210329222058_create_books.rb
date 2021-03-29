class CreateBooks < ActiveRecord::Migration[6.1]
  def change
    create_table :books do |t|
      t.text :title
      t.text :author, default: ''
      t.text :category

      t.timestamps
    end
  end
end
