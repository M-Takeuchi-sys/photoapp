class Photo < ApplicationRecord
  has_many_attached :images

  validates :content, presence: true

  belongs_to :user

  def display_created_at
    I18n.l(self.created_at, format: :default)
  end
end
