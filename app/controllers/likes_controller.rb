class LikesController < ApplicationController
  before_action :authenticate_user!

  def create
    photo = Photo.find(params[:photo_id])
    photo.likes.create!(user_id: current_user.id)
    redirect_to root_path
  end

  def destroy
    photo = Photo.find(params[:photo_id])
    like = photo.likes.find_by!(user_id: current_user.id)

    like.destroy!
    redirect_to root_path
  end
end
