# == Schema Information
#
# Table name: photos
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :bigint           not null
#
# Indexes
#
#  index_photos_on_user_id  (user_id)
#
class Photo < ApplicationRecord
  validates :content, presence: true

  validate :images_presence

  has_many_attached :images
  belongs_to :user
  has_many :likes, dependent: :destroy

  def images_presence
    if images.attached?
      if images.count >= 4
        errors.add(:images, 'は3つまで指定できます')
      end
    else
      errors.add(:images, 'ファイルを添付してください')
    end
  end

  def display_created_at
    I18n.l(self.created_at, format: :default)
  end

  def like_count
    likes.count
  end
end
