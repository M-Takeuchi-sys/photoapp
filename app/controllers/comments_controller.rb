class CommentsController < ApplicationController
  def index
  end

  def new
    photo = Photo.find(params[:photo_id])
    @comment = photo.comments.build
  end
end
