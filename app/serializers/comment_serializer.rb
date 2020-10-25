class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user, :content
  belongs_to :user
  belongs_to :profile
end
