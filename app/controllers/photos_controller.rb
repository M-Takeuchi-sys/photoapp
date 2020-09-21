class PhotosController < ApplicationController
  def index
    @photos = Photo.all
  end

  def new
    @photo = current_user.photos.build
  end

  def create
    @photo = current_user.photos.build(photo_params)
    if @photo.save
      redirect_to root_path(@photo), notice: '投稿しました'
    else
      flash.now[:error] = '投稿に失敗しました'
      render :new
    end
  end

  private
  def photo_params
    params.require(:photo).permit(:content, images: [])
  end
end
