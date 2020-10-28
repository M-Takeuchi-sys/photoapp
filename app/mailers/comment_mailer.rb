class CommentMailer < ApplicationMailer
  def new_comment(photo)
    @photo = photo
    @photo_user = @photo.user
    mail to: @photo_user.email, subject: '【お知らせ】コメントされました'
  end
end