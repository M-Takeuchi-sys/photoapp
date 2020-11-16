require 'rails_helper'

RSpec.describe Photo, type: :model do
  let!(:user) { create(:user) }

  context '写真と内容が入力されている場合' do
    let!(:photo) { build(:photo, user: user) }

    it '写真を保存できる' do
      expect(photo).to be_valid
    end
  end
end
