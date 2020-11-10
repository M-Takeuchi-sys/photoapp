class TimelinesController < ApplicationController
  before_action :authenticate_user!

  def show
    user_ids = current_user.followings.pluck(:id)
    @photos = Photo.where(user_id: user_ids).order(created_at: :desc)

    photos_like_count = Photo.left_joins(:likes).group(:id).order('count(likes.user_id) desc').limit(5)
    from = Time.now - 1.day
    to = Time.now
    @photos_like_count = photos_like_count.where(created_at: from..to).order(created_at: :desc)
  end
end
