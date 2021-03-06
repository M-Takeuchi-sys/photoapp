class AccountsController < ApplicationController
  before_action :authenticate_user!, only: [:show]

  def show
    @user = User.find(params[:id])
    if @user == current_user
      redirect_to profile_path
    end

    @account_photos = @user.photos.all.order(created_at: :desc)
  end
end
