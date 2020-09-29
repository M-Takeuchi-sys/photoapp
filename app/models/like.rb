# == Schema Information
#
# Table name: likes
#
#  id         :bigint           not null, primary key
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :bigint           not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_likes_on_photo_id  (photo_id)
#  index_likes_on_user_id   (user_id)
#
class Like < ApplicationRecord
  belongs_to :user
  belongs_to :photo
end
