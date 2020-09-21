class Photo < ApplicationRecord
  has_many_attached :images

  validates :content, presence: true

  belongs_to :user

  validate :images_presence

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
end
