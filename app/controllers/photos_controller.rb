class PhotosController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy]

  def index
    @photos = Photo.all.order(created_at: :desc)
  end

  def show
    @photo = Photo.find(params[:id])
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

  def edit
    @photo = current_user.photos.find(params[:id])
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update(photo_params)
      redirect_to root_path(@photo), notice: '更新出来ました'
    else
      flash.now[:error] = '更新出来ませんでした'
      render :edit
    end
  end

  def destroy
    photo = current_user.photos.find(params[:id])
    photo.destroy!
    redirect_to root_path, notice: '削除に成功しました'
  end

  private
  def photo_params
    params.require(:photo).permit(:content, images: [])
  end
end
