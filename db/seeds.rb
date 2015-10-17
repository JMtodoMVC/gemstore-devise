# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

@count = 0

if @count < 1
  Gemstone.create!([
    { name: 'Ruby',
      price: '200',
      shine: '38',
      description: 'Oh! What a lovely red'
    },
    { name: 'Emerald',
      price: '150',
      shine: '23',
      description: 'This green is a bit dull, tbh'
    },
    { name: 'Diamond',
      price: '125',
      shine: '58',
      description: 'actually quite common'
    }
  ])
end

@count += 1
