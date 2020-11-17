FactoryBot.define do
  factory :photo do
    content { Faker::Lorem.characters(number: 10) }
    after(:build) do |photo|
      photo.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image1.png')), filename: 'test_image1.png', content_type: 'image/png')
    end

    factory :photo_four_attach do
      after(:build) do |photo_four_attach|
        photo_four_attach.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image1.png')), filename: 'test_image1.png', content_type: 'image/png')
        photo_four_attach.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image2.png')), filename: 'test_image2.png', content_type: 'image/png')
        photo_four_attach.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image3.png')), filename: 'test_image3.png', content_type: 'image/png')
        photo_four_attach.images.attach(io: File.open(Rails.root.join('spec', 'fixtures', 'files', 'test_image4.png')), filename: 'test_image4.png', content_type: 'image/png')
      end
    end
  end
end
