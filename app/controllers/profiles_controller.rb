class ProfilesController < ApplicationController
  before_action :authenticate_user!

  def show
    @profile = current_user.profile

    @current_user_photos = current_user.photos.all.order(created_at: :desc)
  end

  def update
    @profile = current_user.prepare_profile
    @profile.assign_attributes(profile_params)
    if @profile.save
      redirect_to profile_path, notice: '画像を更新！'
    else
      flash.now[:error] = '更新できませんでした'
      render :edit
    end
  end

  private
  def profile_params
    params.fetch(:profile, {}).permit( #prlfileパラメータがない時は {} がデフォルト値
      :avatar
    )
  end
end
