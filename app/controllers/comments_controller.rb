class CommentsController < ApplicationController
  def index
  end

  def new
    photo = Photo.find(params[:photo_id])
    @comment = photo.comments.build
  end

  def create
    photo = Photo.find(params[:photo_id])
    @comment = photo.comments.build(comment_params)
    if @comment.save
      redirect_to photo_path(photo), notice: 'コメントを追加'
    else
      flash.now[:error] = '更新できませんでした'
      render :new
    end
  end

  private
  def comment_params
    params.require(:comment).permit(:content)
  end
end
