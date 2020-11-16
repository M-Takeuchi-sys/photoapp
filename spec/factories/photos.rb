FactoryBot.define do
  factory :photo do
    content { Faker::Lorem.characters(number: 10) }
    after(:build) do |photo|
      photo.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image1.png')), filename: 'test_image1.png', content_type: 'image/png')
    end
  end
end