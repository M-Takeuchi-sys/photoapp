class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :account ,presence: true
  validates :account, uniqueness: true

  has_one :profile, dependent: :destroy
  has_many :photos, dependent: :destroy

  def prepare_profile
    profile || build_profile
  end

  def avatar_image
    if profile&.avatar&.attached?
      profile.avatar
    else
      'default-avatar.png'
    end
  end

  def has_written?(photo) #自分が投稿した写真かどうか
    photos.exists?(id: photo.id)
  end
end
