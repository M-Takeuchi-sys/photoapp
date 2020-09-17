class PhotoController < ApplicationController
  def index
    @photo = Photo.all
  end
end
