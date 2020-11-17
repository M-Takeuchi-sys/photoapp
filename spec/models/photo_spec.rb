require 'rails_helper'

RSpec.describe Photo, type: :model do
  let!(:user) { create(:user) }

  context '写真と内容が入力されている場合' do
    let!(:photo) { build(:photo, user: user) }

    it '写真を保存できる' do
      expect(photo).to be_valid
    end
  end

  context "写真を4枚添付したとき" do
    let!(:photo_four_attach) { build(:photo_four_attach, user: user) }

    before do
      photo_four_attach.save
    end

    it '写真を保存できない' do
      expect(photo_four_attach.errors.messages[:images][0]).to eq('は3つまで指定できます')
    end
  end
end
