# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

initial_state = [
  { title: 'Frankenstein', category: 'Horror' },
  { title: 'The Haunting of Hill House', category: 'Horror' },
  { title: 'The Shining', category: 'Horror' },
  { title: 'Game of Thrones', category: 'Action' },
  { title: 'Ready Player One', category: 'Action' },
  { title: 'Divergent', category: 'Action' },
  { title: 'A Promised Land', category: 'Biography' },
  { title: 'The Diary of Anne Frank', category: 'Biography' },
  { title: 'Long Walk to Freedom', category: 'Biography' },
  { title: '1776', category: 'History' },
  { title: '1491', category: 'History' },
  { title: 'Genghis Khan', category: 'History' },
  { title: 'The Cat in the Hat', category: 'Kids' },
  { title: 'The Tale of Peter the Rabit', category: 'Kids' },
  { title: "Charlotte's Web", category: 'Kids' },
  { title: 'Deep Learning', category: 'Learning' },
  { title: 'Make it Stick', category: 'Learning' },
  { title: 'How We Learn', category: 'Learning' },
  { title: 'Dune', category: 'Sci-Fi' },
  { title: 'The Martian', category: 'Sci-Fi' },
  { title: 'Children of Time', category: 'Sci-Fi' }
]

initial_state.shuffle.each do |book|
  Book.create(title: book[:title], category: book[:category])
end
