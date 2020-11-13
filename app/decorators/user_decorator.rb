# frozen_string_literal: true

module UserDecorator
  def photo_count
    photos.count
  end

  def following_count
    following_relationships.count
  end

  def follower_count
    follower_relationships.count
  end
end
