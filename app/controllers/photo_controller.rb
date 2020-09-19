class PhotoController < ApplicationController
  def index
    @photo = Photo.all
  end

  def new
  end
end
