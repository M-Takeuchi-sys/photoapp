# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_comments_on_photo_id  (photo_id)
#  index_comments_on_user_id   (user_id)
#
class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :photo
  validates :content, presence: true

  after_create :send_email

  private
  def send_email
    CommentMailer.new_comment(photo).deliver_later
  end
end
