class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        if @user.save
            render :show
        else
            render json: @user.errors.full_messages, status: 422 
            # https://travisjeffery.com/b/2012/04/rendering-errors-with-json-and-rails/
        end
    end
end
