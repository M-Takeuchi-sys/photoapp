module PhotoDecorator
  def display_created_at
    I18n.l(self.created_at, format: :default)
  end

  def like_count
    likes.count
  end

  def comment_count
    comments.count
  end
end
