class Photo < ApplicationRecord
  has_many_attached :images
  belongs_to :user

  validates :content, presence: true

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
