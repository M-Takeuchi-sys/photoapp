require 'rails_helper'

RSpec.describe "Photos", type: :request do
  let!(:user) { create(:user) }
  let!(:photos) { create_list(:photo, 3, user: user) }

  describe "GET /photos" do
    it "200ステータスが帰ってくる" do
      get root_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'POST /photos' do
    let(:photo_image) {'test_image1.png'}

    context 'ログインしている場合' do
      before do
        sign_in user
      end

      it '記事が保存される' do
        photo_params = attributes_for(:photo)
        photo_image = fixture_file_upload(photo_image, 'image/png')
        photo_images = attributes_for(photo_image)
        post photos_path({photo: {content: 'aaaaaaa', images: [photo_images]}})
        expect(response).to have_http_status(302)
        expect(Photo.last.content).to eq(photo_params[:content])
      end
    end
  end
end
